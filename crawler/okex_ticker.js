const log = require('./common/log');
const config = require('./okex/config');
require('./common/db/setup')(config);
const crawler = require('./okex/crawler');
const ticker = require('./okex/ticker');

crawler.list()
  .then(ticker.start)
  .catch((err) => {
    log.error("Error while crawling list of symbols!", err)
  })