"use strict";

const HistoricalCourse = require('../common/db/historical');
const config = require('./config');
const RequestRepeater = require('../common/request_repeater');
const { request } = RequestRepeater(config);
const moment = require("moment");

const MIN_DATE = moment('2009-01-01'); //before BTC-Birthday
const PAGE_SIZE = 500;

const determineStartDate = function(symbol, fiat, defaultStartDate) {
  return new Promise((resolve, reject) => {
    HistoricalCourse.find({ symbol: symbol, fiat: fiat })
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

const processEachCourse = function(symbol, fiat, body){
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
      symbol: symbol,
      fiat: fiat,
      date: moment(curEntity[0]).toDate(),
      open: curEntity[1],
      close: curEntity[2],
      high: curEntity[3],
      low: curEntity[4],
      volume: curEntity[5],
    };

    let where = { symbol: entity.symbol, fiat: entity.fiat, date: entity.date };
    bulk.find(where).upsert().updateOne(entity);
    operationCount++;
  }

  if(operationCount !== 0){
    //return a promise of db-execute
    return bulk.execute();
  }

  return Promise.resolve();
};

const get = function(symbol, from) {
  const fiat = "USD";
  const url = `https://api.bitfinex.com/v2/candles/trade:1D:t${symbol}${fiat}/hist?start=${from.unix()}000&limit=${PAGE_SIZE}&sort=1`;
  return request(url)
    .then(({body}) => processEachCourse(symbol, fiat, body))
};

const crawl = function(symbol, from = MIN_DATE){
  return determineStartDate(symbol, "USD", from)
    .then(startDate => {
      const p = [];
      const today = moment();
      let curDate = moment(startDate);

      while(curDate.isBefore(today)){
        p.push(get(symbol, curDate));

        //next page
        curDate = curDate.clone().add(PAGE_SIZE, "days")
      }

      return Promise.all(p);
    });
};

module.exports = {
  crawl
};