const log = require('./common/log');
const config = require('./coinmarketcap/config');
require('./common/db/setup')(config);
const crawler = require('./coinmarketcap/crawler');
const cron = require('cron');

log.info("Spawn job " + JSON.stringify(config.cron));

new cron.CronJob(config.cron, () => {
  log.info("Start crawling");
  crawler().then(() => {
    log.info("Finishing crawling");
  }).catch(err => {
    log.error("Error while crawling crawling", err);
  })
}, null, true);
