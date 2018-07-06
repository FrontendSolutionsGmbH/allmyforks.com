"use strict";

const log = require('../common/log');
const TickerCourse = require('../common/db/ticker').model;
const WebSocket = require('ws');

const WS_URI = 'wss://real.okex.com:10441/websocket'

const transformData = function(currency, data) {
  /*
    {
      "high": "6249.3513",
      "vol": "21316.2938",
      "last": "6070.98",
      "low": "6014.25",
      "buy": "6067.6365",
      "change": "-91.9323",
      "sell": "6070.9798",
      "dayLow": "6014.25",
      "close": "6070.98",
      "dayHigh": "6249.3513",
      "open": "6162.9123",
      "timestamp": 1530109709006
    }
   */

  const open = Number.parseFloat(data.open);
  const change = Number.parseFloat(data.change);
  const percentage = change !== 0 ? ((open + change) * 100 / open) - 100 : 0;

  return {
    from: currency.source,
    to: currency.target,
    date: new Date(data.timestamp),
    course: Number.parseFloat(data.last),
    volume: Number.parseFloat(data.vol),
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

const handleData = function(data, state) {
  if(!(data instanceof Array)) {
    log.warn("Unknown data received: " + JSON.stringify(data));
    return;
  }

  /*
    [{
      "binary": 0,
      "channel": "ok_sub_spot_bch_btc_ticker",
      "data": { ... }
    }]
   */

  //we get an array with one object inside
  data = data[0]

  const channelId = data.channel

  //skip this channel(s)
  if(channelId === "addChannel") {
    return;
  }

  const channel = state.channelMapping[channelId]
  if(!channel){
    log.error("Unknown channel id: " + channelId)
    return;
  }

  const currency = state.currencyMapping[channel.pair]
  const transformed = transformData(currency, data.data)

  return save(transformed)
    .then(() => log.debug("Successful saved course for: " + JSON.stringify(currency)))
    .catch((err) => log.error("Failed to save course for: " + JSON.stringify(currency), err))
}

const handleMessage = function(message, state) {
  log.debug("Incoming Message: " + message)
  const parsed = JSON.parse(message);

  if(message.includes(`"data"`)){
    handleData(parsed, state)
  }
}

const start = function (currencies) {
  const socket = new WebSocket(WS_URI)
  const state = {
    channelMapping: {},
    currencyMapping: {}
  }

  for(let currency of currencies) {
    state.currencyMapping[currency.symbol] = currency
  }

  socket.on('message', (message) => handleMessage(message, state))

  socket.on('open', () => {
    //register foreach currency
    for (let currency of currencies) {
      let channelId = `ok_sub_spot_${currency.symbol}_ticker`
      let msg = `{
        "event":"addChannel",
        "channel":"${channelId}"
      }`
      state.channelMapping[channelId] = {
        pair: currency.symbol
      }

      socket.send(msg)
    }
  })
}

module.exports = {
  start
}