"use strict";

const HistoricalCourse = require('../common/db/historical');
const config = require('./config');
const RequestRepeater = require('../common/request_repeater');
const { request } = RequestRepeater(config);
const moment = require("moment");
const currencyHelper = require('../common/currency_helper');

const MIN_DATE = moment('2009-01-01'); //before BTC-Birthday
const PAGE_SIZE = 500;

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
        MTS,      int     millisecond time stamp
        OPEN,     float   First execution during the time frame
        CLOSE,    float   Last execution during the time frame
        HIGH,     float   Highest execution during the time frame
        LOW, 	    float   Lowest execution during the timeframe
        VOLUME,   float   Quantity of symbol traded within the timeframe
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
      close: curEntity[2],
      high: curEntity[3],
      low: curEntity[4],
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
  const url = `https://api.bitfinex.com/v2/candles/trade:1D:t${source.name}${target.name}/hist?start=${from.unix()}000&limit=${PAGE_SIZE}&sort=1`;
  return request(url)
    .then(({body}) => processEachCourse(source, target, body))
};

const crawl = function(source, target = { name: 'USD', type: 'fiat' }, from = MIN_DATE){
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
  const url = 'https://api.bitfinex.com/v1/symbols';
  return request(url)
    .then(({body}) => {
      let data = JSON.parse(body);

      return data.map(symbol => symbol.toUpperCase())
    })
    .then(symbols => symbols.map(symbol => {
      //symbol has always 6chars
      // ... the first 3 are the source symbol
      // ... the last 3 are the target symbol
      const sourceSymbol = symbol.substr(0, 3);
      const targetSymbol = symbol.substr(3);

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