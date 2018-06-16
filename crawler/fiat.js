const log = require('./common/log');
const config = require('./fiat/config');
require('./common/db/setup')(config);
const crawler = require('./fiat/crawler');
const cron = require('cron');

function doJob(){
  log.info("Start crawling");
  return crawler.crawl().then(() => {
    log.info("Finishing crawling");
  }).catch(err => {
    log.error("Error while crawling", err);
  })
}

function spawnJob() {
  log.info("Spawn job");
  return new cron.CronJob(config.cron, () => doJob(), null, true);
}

doJob()
  .then(() => spawnJob())
  .catch(() => spawnJob())
