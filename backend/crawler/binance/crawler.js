"use strict";

const HistoricalCourse = require('../../common/db/historical').model;
const config = require('./config');
const log = require('../../common/log');
const RequestPool = require('../common/request_pool');
const { request } = RequestPool(config.request);
const moment = require("moment");
const currencyHelper = require('../common/currency_helper')

const MIN_DATE = moment('2009-01-01'); //before BTC-Birthday
const PAGE_SIZE = 500;

const mapCoinSymbol = function(coin) {
  if(coin.type === 'crypto') {
    for(let mapping of config.mapping) {
      if(mapping.from === coin.name) {
        let mappedCoin = {...coin}
        mappedCoin.name = mapping.to

        log.debug(`Apply mapping ${coin.name} => ${mappedCoin.name} (${mapping.name})`)

        return mappedCoin
      }
    }
  }

  return coin
}

const determineStartDate = function(source, target, defaultStartDate) {
  const mappedSource = mapCoinSymbol(source)
  const mappedTarget = mapCoinSymbol(target)

  return new Promise((resolve, reject) => {
    HistoricalCourse.find({
      from: mappedSource,
      to: mappedTarget
    })
    .limit(1)
    .sort({ date: 'desc' })
    .select({ date: 1})
    .exec((err, courses) => {
      if (err || courses.length === 0) {
        resolve(defaultStartDate);
        return;
      }

      resolve(moment(courses[0].date));
    })
  });
};

const processEachCourse = function(source, target, body){
  const data = JSON.parse(body);

  /*
    Array of Arrays:
    [
      [
        1499040000000,      // Open time
        "0.01634790",       // Open
        "0.80000000",       // High
        "0.01575800",       // Low
        "0.01577100",       // Close
        "148976.11427815",  // Volume
        1499644799999,      // Close time
        "2434.19055334",    // Quote asset volume
        308,                // Number of trades
        "1756.87402397",    // Taker buy base asset volume
        "28.46694368",      // Taker buy quote asset volume
        "17928899.62484339" // Ignore
      ],
      [...]
    ]
   */

  let bulk = HistoricalCourse.collection.initializeUnorderedBulkOp();
  let operationCount = 0;

  const mappedSource = mapCoinSymbol(source)
  const mappedTarget = mapCoinSymbol(target)

  for(let curEntity of data){
    let entity = {
      from: mappedSource,
      to: mappedTarget,
      date: moment(curEntity[0]).toDate(),
      open: Number.parseFloat(curEntity[1]),
      high: Number.parseFloat(curEntity[2]),
      low: Number.parseFloat(curEntity[3]),
      close: Number.parseFloat(curEntity[4]),
      volume: Number.parseFloat(curEntity[5]),
    };

    let where = { from: entity.from, to: entity.to, date: entity.date };
    bulk.find(where).upsert().updateOne(entity);
    operationCount++;
  }

  if(operationCount !== 0){
    //return a promise of db-execute
    return bulk.execute();
  }

  return Promise.resolve();
};

const get = function(source, target, from) {
  const url = `https://api.binance.com/api/v1/klines?symbol=${source.name}${target.name}&interval=1d&startTime=${from.unix()}000&limit=${PAGE_SIZE}`;
  return request(url)
    .then(({body}) => processEachCourse(source, target, body))
    .catch(({error, response}) => {
      if(response && response.statusCode === HttpStatus.INTERNAL_SERVER_ERROR){
        //ignore this case
        return Promise.resolve();
      }
      if(response && response.statusCode !== HttpStatus.OK) {
        return Promise.reject(new Error("Bad status code: " + response.statusCode))
      }

      return Promise.reject(error)
    })
};

const crawl = function(source, target = {name: "USDT", type: "crypto"}, from = MIN_DATE){
  return determineStartDate(source, target, from)
    .then(startDate => {
      const p = [];
      const today = moment();
      let curDate = moment(startDate);

      while(curDate.isBefore(today)){
        p.push(get(source, target, curDate));

        //next page
        curDate = curDate.clone().add(PAGE_SIZE, "days")
      }

      return Promise.all(p);
    });
};

const list = function() {
  const url = 'https://api.binance.com/api/v1/exchangeInfo'
  return request(url)
    .then(({body}) => {
      const data = JSON.parse(body);

      return data.symbols.map(entity => {
        return {
          symbol: entity.symbol,
          source: currencyHelper.toCurrency(entity.baseAsset),
          target: currencyHelper.toCurrency(entity.quoteAsset),
        }
      })
    })
}

module.exports = {
  crawl, list
};