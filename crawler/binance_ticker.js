const log = require('./common/log');
const config = require('./binance/config');
require('./common/db/setup')(config);
const crawler = require('./binance/crawler');
const ticker = require('./binance/ticker');

crawler.list()
  .then(ticker.start)
  .catch((err) => {
    log.error("Error while crawling list of symbols!", err)
  })