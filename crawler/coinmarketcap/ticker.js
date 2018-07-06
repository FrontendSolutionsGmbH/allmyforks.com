"use strict";

const config = require('./config');
const log = require('../common/log');
const RequestPool = require('../common/request_pool');
const { request } = RequestPool(config.request);
const TickerCourse = require('../common/db/ticker').model;

const mapCoinSymbol = function(slug, symbol) {
  for(let mapping of config.mapping) {
    if(slug === mapping.slug){
      log.info(`Apply mapping ${symbol} => ${mapping.symbol} (${slug})`)
      return mapping.symbol
    }
  }
  return symbol
}

const transform = function(data) {
  /*
    {
      "id": 218,
      "name": "FlutterCoin",
      "symbol": "FLT",
      "website_slug": "fluttercoin",
      "rank": 1074,
      "circulating_supply": 436450711.0,
      "total_supply": 436450711.0,
      "max_supply": null,
      "quotes": {
          "USD": {
              "price": 0.0011001,
              "volume_24h": 174.337,
              "market_cap": 480139.0,
              "percent_change_1h": -0.17,
              "percent_change_24h": -1.16,
              "percent_change_7d": -18.49
          }
      },
      "last_updated": 1530127746
    }
   */

  const price = data.quotes.USD.price
  let p1h = data.quotes.USD["percent_change_1h"]
  let p1d = data.quotes.USD["percent_change_24h"]
  let p7d = data.quotes.USD["percent_change_7d"]

  p1h = p1h ? p1h : 0
  p1d = p1d ? p1d : 0
  p7d = p7d ? p7d : 0

  const a1h = p1h * price / 100;
  const a1d = p1d * price / 100;
  const a7d = p7d * price / 100;

  return {
    from: {
      name: mapCoinSymbol(data['website_slug'], data.symbol),
      type: "crypto"
    },
    to: {
      name: "USD",
      type: "fiat"
    },
    date: new Date(data["last_updated"] * 1000),
    course: price,
    volume: data.quotes.USD["volume_24h"],
    change: {
      '1h': {
        amount: a1h,
        percentage: p1h
      },
      '1d': {
        amount: a1d,
        percentage: p1d
      },
      '7d': {
        amount: a7d,
        percentage: p7d
      }
    }
  }
}

const save = function(data) {
  let where = { from: data.from, to: data.to };
  return TickerCourse.findOneAndUpdate(where, data, { upsert: true })
}
const handleResponse = function(response) {
  const body = JSON.parse(response.body);

  /*
    {
      "data": [
        { ... }, ...
      ],
      "metadata": {
        "timestamp": 1530127651,
        "num_cryptocurrencies": 1591,
        "error": null
    }
   */

  if(body.metadata.error) {
    log.error("Received an error as response: " + JSON.stringify(body), body.metadata.error)
    return
  }

  const promises = []
  for(let entry of body.data) {
    const transformed = transform(entry)
    let p = save(transformed)
      .then(() => log.debug("Successful saved course for: " + entry.symbol))
      .catch((err) => log.error("Failed to save course for: " + entry.symbol, err))

    promises.push(p)
  }

  return {
    body,
    promise: Promise.all(promises)
  }
}

const startAll = function() {
  return request('https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id&structure=array')
    .then(handleResponse)
    .then(result => {
      //now we can determine the currency count
      const totalCurrency = result.body.metadata["num_cryptocurrencies"]
      const currencyLeft = totalCurrency - 100;
      const pageCount = Math.ceil(currencyLeft / 100)

      let promises = []
      let offset = 101;
      for(let i=0; i < pageCount; i++) {
        let p = request(`https://api.coinmarketcap.com/v2/ticker/?start=${offset}&limit=100&sort=id&structure=array`)
          .catch((err) => {
            log.error(`Error while calling page ${offset}`, err)
          })
          .then((response) => {
            return handleResponse(response).promise
          })

        promises.push(p)
        offset += 100
      }

      return Promise.all([result.promise, ...promises])
    })
}

module.exports = {
  startAll
}