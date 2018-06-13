const log = require('./common/log');
const config = require('./bitfinex/config');
require('./common/db/setup')(config);
const crawler = require('./bitfinex/crawler');
const cron = require('cron');

function checkJob(job){
  if(!job) return false;
  if(!job.cron) return false;
  if(!job.from) return false;
  if(!job.from.name) return false;
  if(!job.from.type) return false;
  if(!job.to) return false;
  if(!job.to.name) return false;
  if(!job.to.type) return false;

  return true;
}

function doJob(job){
  log.info("Start crawling '" + job.from.name + job.to.name + "'");
  return crawler.crawl(job.from, job.to).then(() => {
    log.info("Finishing crawling '" + job.from.name + job.to.name + "'");
  }).catch(err => {
    log.error("Error while crawling crawling '" + job.from.name + job.to.name + "'", err);
  })
}

function spawnJob(job){
  log.info("Spawn job " + JSON.stringify(job));
  return new cron.CronJob(job.cron, () => doJob(job), null, true);
}

function spawnJobs(jobs) {
  for (let job of jobs) {
    if (!checkJob(job)) {
      log.error("Invalid Job: " + JSON.stringify(job));
      continue;
    }

    doJob(job)
      .then(() => spawnJob(job))
      .catch(() => spawnJob(job))
  }
}

//no jobs defined
if(!config.job || config.job.length === 0) {
  //..crawl all given
  crawler.list()
    .then(coins => coins.map(pair => {
      return {
        cron: config.cron,
        from: pair.source,
        to: pair.target,
      }
    }))
    .then(jobs => spawnJobs(jobs))
}else{
  spawnJobs(config.job)
}