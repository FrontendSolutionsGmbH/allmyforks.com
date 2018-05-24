/**
 * Module dependencies.
 */

const log = require('./log');
const config = require('./config');
const {historical, ticker} = require('./crawler');

const jobTick = config.job.interval;

const job = () => {
  log.info("Start crawling.");

  historical().then(() => {
    log.info("Finish crawling!");
    setTimeout(job, jobTick);
  }).catch((err) => {
    log.error("Crawling failed!", err);
    setTimeout(job, jobTick);
  });
};

job();
