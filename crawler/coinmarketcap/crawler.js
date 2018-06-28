"use strict";

const cheerio = require('cheerio');
const config = require('./config');
const RequestPool = require('../common/request_pool');
const { request } = RequestPool(config.request);
const HistoricalCourse = require('../common/db/historical').model;
const log = require('../common/log');
const moment = require("moment");

const MIN_DATE = moment('2009-01-01');

const determineStartDate = function(symbol, fiat, defaultStartDate) {
  return new Promise((resolve, reject) => {
    HistoricalCourse.find({
      from: {
        name: symbol,
        type: 'crypto'
      },
      to: {
        name: fiat,
        type: 'fiat'
      }
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
      to: {
        name: 'USD',
        type: 'fiat'
      },
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
    let where = { from: curCourse.from, to: curCourse.to, date: curCourse.date }

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
      from: {
        name: coin.symbol,
        type: 'crypto'
      },
      ...curCourse,
    }
  })
}

const processCourse = function(coin, startDate){
  const start = startDate.format('YYYYMMDD');
  const end = moment().add(-1, 'days').format('YYYYMMDD');
  const url = `https://coinmarketcap.com/currencies/${coin.slug}/historical-data/?start=${start}&end=${end}`;

  //crawl the coin
  return request(url)
    .then(({body}) => parseCourses(coin, body))
    .then(saveCourses)
    .catch(err => log.error(`[DONE] Historical course of ${coin.symbol} with error`, err))
    .then(() => log.info(`[DONE] Historical course of ${coin.symbol}`))
}

const crawl = function(coin, from = MIN_DATE){
  return determineStartDate(coin.symbol, 'USD', from)
    .then((startDate) => processCourse(coin, startDate))
};

const list = function() {
  const url = 'https://api.coinmarketcap.com/v2/listings/'
  return request(url)
    .then(({body}) => {
      const data = JSON.parse(body);

      return data.data.map(entity => {
        return {
          id: entity.id,
          symbol: entity.symbol,
          slug: entity.website_slug,
        }
      })
    })
}

module.exports = {
  crawl, list
};
