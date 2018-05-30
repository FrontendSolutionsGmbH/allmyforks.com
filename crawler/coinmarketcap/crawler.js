"use strict";

const cheerio = require('cheerio');
const config = require('./config');
const RequestRepeater = require('../common/request_repeater');
const { request } = RequestRepeater(config);
const HistoricalCourse = require('../common/db/historical');
const log = require('../common/log');
const moment = require("moment");

const MIN_DATE = moment('2009-01-01');

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

const saveParseFloat = function(text){
  let parsed = parseFloat(text);

  if(!parsed) {
    parsed = null;
  }

  return parsed;
}

const parse = function(content) {
  const $ = cheerio.load(content);

  let courses = []
  $('table.table tbody tr').each(function (i, elem) {
    const cells = $(this).find('td');
    const rawDate = cells.eq(0).text();

    const data = {
      date: moment(rawDate, "MMM DD, YYYY").hour(0).minute(0).toDate(),
      fiat: 'USD',
      open: saveParseFloat(cells.eq(1).data('format-value')),
      high: saveParseFloat(cells.eq(2).data('format-value')),
      low: saveParseFloat(cells.eq(3).data('format-value')),
      close: saveParseFloat(cells.eq(4).data('format-value')),
      volume: saveParseFloat(cells.eq(5).data('format-value')),
    };

    courses.push(data);
  });

  return courses;
}

const saveCourses = function(courses){
  let bulk = HistoricalCourse.collection.initializeUnorderedBulkOp();
  let operationCount = 0;

  for(let curCourse of courses){
    let where = { symbol: curCourse.symbol, fiat: curCourse.fiat, date: curCourse.date }

    //add bulk operation
    bulk.find(where).upsert().updateOne(curCourse);
    operationCount++;
  }

  if(operationCount !== 0){
    //return a promise of db-execute
    return bulk.execute()
  }

  return Promise.resolve()
}

const parseCourses = function(coin, body) {
  return parse(body).map(curCourse => {
    return {
      symbol: coin.symbol,
      ...curCourse,
    }
  })
}

const processCourse = function(coin, startDate){
  const start = startDate.format('YYYYMMDD');
  const end = moment().add(-1, 'days').format('YYYYMMDD');
  const url = `https://coinmarketcap.com/currencies/${coin.website_slug}/historical-data/?start=${start}&end=${end}`;

  //crawl the coin
  return request(url)
  .then(({body}) => parseCourses(coin, body))
  .then(saveCourses)
  .catch(err => log.error(`[DONE] Historical course of ${coin.symbol} with error`, err))
  .then(() => log.info(`[DONE] Historical course of ${coin.symbol}`))
}

const processEachCourse = function(body, minStartDate) {
  let requestPromises = [];
  let jsonBody = JSON.parse(body);

  //now we can crawl each coin
  for(let coin of jsonBody.data) {
    let p = determineStartDate(coin.symbol, 'USD', minStartDate)
    .then((startDate) => processCourse(coin, startDate))

    requestPromises.push(p);
  }

  //wait for all requests
  return Promise.all(requestPromises)
}

const crawl = function(from = MIN_DATE){
  //first we need to know which coins ar listed
  return request("https://api.coinmarketcap.com/v2/listings/")
  .then(({body}) => processEachCourse(body, from))
};

module.exports = crawl;
