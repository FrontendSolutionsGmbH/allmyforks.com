const log = require('./common/log');
const config = require('./bitfinex/config');
require('./common/db/setup')(config);
const crawler = require('./bitfinex/crawler');
const ticker = require('./bitfinex/ticker');

crawler.list()
  .then(ticker.start)
  .catch((err) => {
    log.error("Error while crawling list of symbols!", err)
  })