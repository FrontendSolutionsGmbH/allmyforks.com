const log = require('./common/log');
const config = require('./coinmarketcap/config');
require('./common/db/setup')(config);
const crawler = require('./coinmarketcap/crawler');
const cron = require('cron');

function checkJob(job){
  if(!job) return false;
  if(!job.cron) return false;
  if(!job.coin) return false;
  if(!job.coin.symbol) return false;
  if(!job.coin.slug) return false;

  return true;
}

for(let job of config.job) {
  if(!checkJob(job)) {
    log.error("Invalid Job: " + JSON.stringify(job));
    continue;
  }

  log.info("Spawn job " + JSON.stringify(job));
  new cron.CronJob(job.cron, () => {
    log.info("Start crawling '" + job.coin.symbol + "'");
    crawler.crawl(job.coin).then(() => {
      log.info("Finishing crawling '" + job.coin.symbol + "'");
    }).catch(err => {
      log.error("Error while crawling crawling '" + job.coin.symbol + "'", err);
    })
  }, null, true);
}