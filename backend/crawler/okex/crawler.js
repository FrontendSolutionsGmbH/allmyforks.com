"use strict";

const HistoricalCourse = require('../../common/db/historical').model;
const config = require('./config');
const RequestPool = require('../common/request_pool');
const { request } = RequestPool(config.request);
const moment = require("moment");
const currencyHelper = require('../common/currency_helper');
const HttpStatus = require('http-status-codes');

const MIN_DATE = moment('2009-01-01'); //before BTC-Birthday

const determineStartDate = function(source, target, defaultStartDate) {
  return new Promise((resolve, reject) => {
    HistoricalCourse.find({
      from: source,
      to: target
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
        1417564800000,	timestamp
        384.47,		open
        387.13,		high
        383.5,		low
        387.13,		close
        1062.04,	volume
      ],
      [...]
    ]
   */

  let bulk = HistoricalCourse.collection.initializeUnorderedBulkOp();
  let operationCount = 0;

  for(let curEntity of data){
    let entity = {
      from: source,
      to: target,
      date: moment(curEntity[0]).toDate(),
      open: curEntity[1],
      high: curEntity[2],
      low: curEntity[3],
      close: curEntity[4],
      volume: curEntity[5],
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
  const url = `https://www.okex.com/api/v1/kline.do?symbol=${source.name.toLowerCase()}_${target.name.toLowerCase()}&type=1day&since=${from.unix()}000`;
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

const crawl = function(source, target = { name: 'USD', type: 'fiat' }, from = MIN_DATE){
  return determineStartDate(source, target, from)
  .then(startDate => get(source, target, startDate));
};

const list = function() {
  const url = 'https://www.okex.com/v2/spot/markets/products';
  return request(url)
  .then(({body}) => {
    let data = JSON.parse(body);

    return data.data.map(product => product.symbol)
  })
  .then(symbols => symbols.map(symbol => {
    //symbol has always a underscore to separate currencies
    const split = symbol.toUpperCase().split('_');
    const sourceSymbol = split[0];
    const targetSymbol = split[1];

    return {
      symbol: symbol,
      source: currencyHelper.toCurrency(sourceSymbol),
      target: currencyHelper.toCurrency(targetSymbol),
    }
  }))
};

module.exports = {
  crawl, list
};