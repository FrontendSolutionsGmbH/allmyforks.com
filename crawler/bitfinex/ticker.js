"use strict";

const log = require('../common/log');
const TickerCourse = require('../common/db/ticker').model;
const WebSocket = require('ws');

const WS_URI = 'wss://api.bitfinex.com/ws/2'

const handleEvent = function(event, state){
  if(event.event !== 'subscribed') {
    log.warn("Unknown event received: " + JSON.stringify(event));
    return
  }
  if(event.channel !== 'ticker') {
    log.warn("Unknown channel received: " + JSON.stringify(event));
    return
  }

  state.channelMapping[event.chanId] = {
    channelId: event.chanId,
    pair: event.pair,
    symbol: event.symbol,
  }
}

const transformData = function(currency, data) {
  /*
    [
      BID                 float 	Price of last highest bid
      BID_SIZE            float 	Size of the last highest bid
      ASK                 float 	Price of last lowest ask
      ASK_SIZE            float 	Size of the last lowest ask
      DAILY_CHANGE        float 	Amount that the last price has changed since yesterday
      DAILY_CHANGE_PERC   float 	Amount that the price has changed expressed in percentage terms
      LAST_PRICE 	        float   Price of the last trade.
      VOLUME              float 	Daily volume
      HIGH                float 	Daily high
      LOW                 float 	Daily low
    ]
   */
  return {
    from: currency.source,
    to: currency.target,
    date: new Date(),
    course: data[6],
    volume: data[7],
    change: {
      '1d': {
        amount: data[4],
        percentage: data[5]
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
    // Trading pairs
    [
      CHANNEL_ID,
      [...]
    ]
   */

  const channelId = data[0]
  const channel = state.channelMapping[channelId]
  if(!channel){
    log.error("Unknown channel id: " + channelId)
    return;
  }

  if(!(data[1] instanceof Array)) {
    //skip these ones
    log.debug("Skip data: ", data)
    return;
  }

  const currency = state.currencyMapping[channel.pair]
  const transformed = transformData(currency, data[1])

  return save(transformed)
    .then(() => log.debug("Successful saved course for: " + JSON.stringify(currency)))
    .catch((err) => log.error("Failed to save course for: " + JSON.stringify(currency), err))
}

const handleMessage = function(message, state) {
  log.debug("Incoming Message: " + message)
  const parsed = JSON.parse(message);

  if(message.includes("event")){
    handleEvent(parsed, state)
  }else{
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
      let msg = JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        symbol: currency.symbol
      })

      socket.send(msg)
    }
  })
}

module.exports = {
  start
}