const log = require('../common/log');
const config = require('./coinmarketcap/config');
require('./common/db_setup')(config);
const ticker = require('./coinmarketcap/ticker');
const cron = require('cron');

function doJob() {
  log.info("Start crawling ticker courses");
  return ticker.startAll()
    .then(() => log.info("Crawling ticker done"))
    .catch((err) => log.error("Error while crawling list of symbols!", err))
}

function spawnJob() {
  log.info("Spawn job ");
  new cron.CronJob(config.cron, () => doJob(), null, true);
}

doJob()
  .then(() => spawnJob())
  .catch(() => spawnJob())
