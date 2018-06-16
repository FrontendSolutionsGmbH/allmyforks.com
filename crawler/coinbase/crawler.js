"use strict";

const HistoricalCourse = require('../common/db/historical').model;
const config = require('./config');
const RequestPool = require('../common/request_pool');
const { request } = RequestPool(config.request);

const processEachCourse = function(body){
  const data = JSON.parse(body);
  const symbol = data.data.base;
  const fiat = data.data.currency;

  let bulk = HistoricalCourse.collection.initializeUnorderedBulkOp();
  let operationCount = 0;

  for(let price of data.data.prices){
    let entity = {
      from: {
        name: symbol,
        type: 'crypto'
      },
      to: {
        name: fiat,
        type: 'fiat'
      },
      date: price.time,
      close: Number.parseFloat(price.price)
    };

    let where = { from: entity.from, to: entity.to, date: entity.date };
    bulk.find(where).upsert().updateOne(entity);
    operationCount++;
  }

  if(operationCount !== 0){
    //return a promise of db-execute
    return bulk.execute();
  }

  return Promise.all(p);
};

const get = function(symbol){
  const url = `https://www.coinbase.com/api/v2/prices/${symbol}-USD/historic?period=all`;
  return request(url)
    .then(({body}) => processEachCourse(body))
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

module.exports = {
  get
};