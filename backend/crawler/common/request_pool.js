"use strict";

const log = require('../../common/log');
const fifo = require('fifo')
const request = require('request');
const HttpStatus = require('http-status-codes');

const RequestPool = function(config){
  const REQUEST_TIMEOUT = config.timeout || 60000;
  const TIME_BETWEEN_BATCH = config.cooldown || 60 * 1000;
  const TICK_TIME = config.tick || 500
  const BATCH_SIZE = config.batch || 10
  const MAX_RETRY = config.maxretry || 0
  const queue = fifo()

  let inProgress = []
  let sleep = false

  /**
   * This function will called on each tick
   */
  const tick = function() {
    log.debug("[RequestPool] tick")

    if(queue.length <= 0) return; //nothing to do
    if(sleep) return; //we sleep actually

    if(inProgress.length >= BATCH_SIZE) {
      sleep = true;

      let promises = []
      for(let job of inProgress) {
        promises.push(job.internalPromise.promise)
      }

      const resetBatch = function(){
        log.debug("[RequestPool] batch is done")

        inProgress = []
        setTimeout(() => sleep = false, TIME_BETWEEN_BATCH)
      }

      //wait for all requests in batch
      //and after that sleep the configured time
      //and free the next batch
      Promise.all(promises)
        .then(resetBatch)
        .catch(resetBatch)

      return; //now we sleep
    }

    while(queue.length > 0 && inProgress.length < BATCH_SIZE) {
      //put the first left job in queue
      let job = queue.shift()

      //execute the request
      log.info("[CALL][START] " + job.request.uri);
      request({uri: job.request.uri, timeout: REQUEST_TIMEOUT},
        (err, resp, body) => {
          log.info("[CALL][DONE] " + job.request.uri);
          let shouldRetry = false;

          if (err || resp.statusCode !== HttpStatus.OK) {
            const statusCode = resp ? resp.statusCode : -1
            switch(statusCode) {
              case HttpStatus.TOO_MANY_REQUESTS:
              case HttpStatus.IM_A_TEAPOT:
                shouldRetry = true;
                log.debug("Request error: too many requests. Retry: " + job.request.uri);
            }

            if(err && err.code && err.code === 'ETIMEDOUT') {
              log.debug("Request error: timed out. Retry: " + job.request.uri);
              shouldRetry = true;
            }

            if(shouldRetry){
              if(job.request.retryCount < MAX_RETRY) {
                job.request.retryCount++;

                //push this job back (retry)
                queue.push(job);
                job.internalPromise.resolve()
                return;
              }
            }

            //forward request answer to promise
            job.internalPromise.resolve()
            job.promise.reject({
              error: err,
              response: resp,
              body: body,
            })
          } else {
            //forward request answer to promise
            job.internalPromise.resolve()
            job.promise.resolve({
              response: resp,
              body: body,
            })
          }
        })

      //push it to the inProgress-Frame
      inProgress.push(job);
    }
  }

  //initialise the ticker
  setInterval(tick, TICK_TIME)

  /**
   * Add a request to queue. If the queue limit is not reached, the request
   * will execute quite directly. Otherwise the request is queued and will
   * execute as soon as possible (depends on how many requests are in queue)
   *
   * @param uri The request uri
   * @return {Promise<any>} A Promise which will resolve/rejected after the answer of
   * request was received
   */
  const queueRequest = function(uri){
    let pResolve = null
    let pReject = null
    let p = new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject
    })

    let pInternalResolve = null
    let pInternalReject = null
    let pInternal = new Promise((resolve, reject) => {
      pInternalResolve = resolve;
      pInternalReject = reject
    })

    queue.push({
      promise: {
        promise: p,
        resolve: pResolve,
        reject: pReject,
      },
      internalPromise: {
        promise: pInternal,
        resolve: pInternalResolve,
        reject: pInternalReject,
      },
      request: {
        uri: uri,
        retryCount: 0,
      }
    })

    return p;
  };

  return {
    request: queueRequest
  }
};

//do we call directly?
if (require.main === module) {
  const rp = RequestPool({
    sleep: 1000
  })
  let promises = []

  for(let i=0; i < 98; i++) {
    let p = rp.request("http://www.google.de?q=" + i)
      .then(() => console.log("Finished " + i))

    promises.push(p)
  }

  Promise.all(promises)
    .then(() => console.log("finish all"))
}

module.exports = RequestPool;