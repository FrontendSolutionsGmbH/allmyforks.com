const log = require('./common/log');
const config = require('./binance/config');
require('./common/db/setup')(config);
const crawler = require('./binance/crawler');
const cron = require('cron');

function checkJob(job){
  if(!job) return false;
  if(!job.cron) return false;
  if(!job.symbol) return false;

  return true;
}

for(let job of config.job) {
  if(!checkJob(job)) {
    log.error("Invalid Job: " + JSON.stringify(job));
    continue;
  }

  log.info("Spawn job " + JSON.stringify(job));
  new cron.CronJob(job.cron, () => {
    log.info("Start crawling '" + job.symbol + "'");
    crawler.crawl(job.symbol).then(() => {
      log.info("Finishing crawling '" + job.symbol + "'");
    }).catch(err => {
      log.error("Error while crawling crawling '" + job.symbol + "'", err);
    })
  }, null, true);
}