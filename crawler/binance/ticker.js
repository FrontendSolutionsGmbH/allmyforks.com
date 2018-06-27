"use strict";

const log = require('../common/log');
const TickerCourse = require('../common/db/ticker').model;
const WebSocket = require('ws');

const transformData = function(currency, data) {
  /*
    {
      "t": 123400000, // Kline start time
      "T": 123460000, // Kline close time
      "s": "BNBBTC",  // Symbol
      "i": "1m",      // Interval
      "f": 100,       // First trade ID
      "L": 200,       // Last trade ID
      "o": "0.0010",  // Open price
      "c": "0.0020",  // Close price
      "h": "0.0025",  // High price
      "l": "0.0015",  // Low price
      "v": "1000",    // Base asset volume
      "n": 100,       // Number of trades
      "x": false,     // Is this kline closed?
      "q": "1.0000",  // Quote asset volume
      "V": "500",     // Taker buy base asset volume
      "Q": "0.500",   // Taker buy quote asset volume
      "B": "123456"   // Ignore
    }
   */
  const open = Number.parseFloat(data.o);
  const close = Number.parseFloat(data.c);
  const change = close - open;
  const percentage = change !== 0 ? ((open + change) * 100 / open) - 100 : 0;


  return {
    from: currency.source,
    to: currency.target,
    date: new Date(),
    course: close,
    volume: Number.parseFloat(data.Q),
    change: {
      '1d': {
        amount: change,
        percentage: percentage
      }
    }
  }
}

const save = function(data) {
  let where = { from: data.from, to: data.to };
  return TickerCourse.findOneAndUpdate(where, data, { upsert: true })
}

const handleMessage = function(message, currency) {
  log.debug("Incoming Message: " + message)
  let parsedMessage = JSON.parse(message)
  /*
    {
      "e": "kline",     // Event type
      "E": 123456789,   // Event time
      "s": "BNBBTC",    // Symbol
      "k": { ... }      // Data
    }
   */

  const eventType = parsedMessage.e
  if(eventType !== 'kline') {
    log.warn("Unknown data received: " + message);
    return;
  }

  const data = parsedMessage.k
  const transformed = transformData(currency, data)

  return save(transformed)
    .then(() => log.debug("Successful saved course for: " + JSON.stringify(currency)))
    .catch((err) => log.error("Failed to save course for: " + JSON.stringify(currency), err))
}

const start = function (currencies) {
  for(let currency of currencies) {
    const uri = `wss://stream.binance.com:9443/ws/${currency.symbol.toLowerCase()}@kline_1d`
    const socket = new WebSocket(uri)

    //we don't have to send anything... just listen
    socket.on('message', (message) => handleMessage(message, currency))
    socket.on('error', (err) => {
      log.error(`Could not establish socket for ${currency.symbol}. URI: ${uri}`, err)
    })
  }
}

module.exports = {
  start
}