const log = require('./log');
const config = require('./config');
const crawler = require('./crawler');
const cron = require('cron');

function checkJob(job){
  if(!job) return false;
  if(!job.cron) return false;
  if(!job.url) return false;
  if(!job.dir) return false;

  return true;
}

for(let job of config.job) {
  if(!checkJob(job)) {
    log.error("Invalid Job: " + JSON.stringify(job))
    continue;
  }

  log.info("Spawn job " + JSON.stringify(job));
  new cron.CronJob(job.cron, () => {
    crawler.get(job.url, job.dir, job.suffix);
  }, null, true);
}

