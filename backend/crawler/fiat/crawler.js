"use strict";

const HistoricalCourse = require('../../common/db/historical').model;
const config = require('./config');
const RequestRepeater = require('../common/request_repeater');
const { request } = RequestRepeater(config);
const log = require('../../common/log');
const moment = require("moment");
const parse = require('csv-parse/lib/sync');

const MIN_DATE = moment('2009-01-01');

const saveEntities = function(courses) {
  if(!courses || courses.length === 0) {
    return Promise.resolve()
  }

  let bulk = HistoricalCourse.collection.initializeUnorderedBulkOp();
  for(let curCourse of courses) {
    let where = { from: curCourse.from, to: curCourse.to, date: curCourse.date }

    //add bulk operation
    bulk.find(where).upsert().updateOne(curCourse);
  }

  //return a promise of db-execute
  return bulk.execute()
}

const determineStartDate = function(pairFrom, pairTo, defaultFrom) {
  return new Promise((resolve, reject) => {
    HistoricalCourse.find({ from: pairFrom, to: pairTo })
    .limit(1)
    .sort({ date: 'desc' })
    .select({ date: 1})
    .exec((err, courses) => {
      if (err || courses.length === 0) {
        resolve(defaultFrom);
        return;
      }

      resolve(moment(courses[0].date));
    })
  });
}

const saveParseFloat = function(text){
  if(!text) return -1;

  let parsed = parseFloat(text.replace(".", "").replace(",", "."));

  if(!parsed) {
    parsed = null;
  }

  return parsed;
}

const inverseData = function(content) {
  let from = content.from;
  let to = content.to;
  let result = {...content}
  result.to = from;
  result.from = to;
  result.open = 1 / result.open;
  result.high = 1 / result.high;
  result.low = 1 / result.low;
  result.close = 1 / result.close;

  return result;
}

const extractData = function(content) {
  /**
   * EXAMPLE-Record

   { Datum: '2009-01-01',
    Erster: '1,3917',
    Hoch: '1,3917',
    Tief: '1,3917',
    Schlusskurs: '1,3917' }

   */

  return {
    date: moment(content['Datum'], "YYYY-MM-DD").toDate(),
    open: saveParseFloat(content['Erster']),
    high: saveParseFloat(content['Hoch']),
    low: saveParseFloat(content['Tief']),
    close: saveParseFloat(content['Schlusskurs']),
  };
}

const parsePair = function(body, pairFrom, pairTo){
  let courses = []

  let records = parse(body, {
    delimiter: ';',
    auto_parse: true,
    columns: true,
    skip_empty_lines: true
  })

  for (let record of records) {
    let data = {
      from: {
        name: pairFrom,
        type: 'fiat'
      },
      to: {
        name: pairTo,
        type: 'fiat'
      },
      ...extractData(record),
    }
    let iData = inverseData(data)

    courses.push(data)
    courses.push(iData)
  }

  return courses
}

const processPair = function(from, to, defaultStartDate) {
  return determineStartDate(from, to, defaultStartDate)
  .then(startDate => fiatUrls[from][to](startDate, moment()))
  .then(request)
  .then(({body}) => parsePair(body, from, to))
  .then(saveEntities)
  .catch(err => log.error(`[DONE] Historical fiat course for ${from}${to} / ${to}${from} with error`, err))
  .then(() => log.info(`[DONE] Historical fiat course for ${from}${to} / ${to}${from}`))
}

const fiatUrls = {
  "EUR": {
    "USD": function(from, to){
      let fFrom = moment(from).format('DD.MM.YYYY')
      let fTo = moment(to).format('DD.MM.YYYY')

      return `https://www.ariva.de/quote/historic/historic.csv?secu=4633&boerse_id=48&clean_split=0&clean_payout=0&clean_bezug=0&min_time=${fFrom}&max_time=${fTo}&trenner=%3B&go=Download`
    }
  }
}

const crawl = function(from = MIN_DATE) {
  let p = []

  for(let pairFrom of Object.keys(fiatUrls)) {
    for (let pairTo of Object.keys(fiatUrls[pairFrom])) {
      p.push(processPair(pairFrom, pairTo, from))
    }
  }

  return Promise.all(p)
}

module.exports = {
  crawl
};

