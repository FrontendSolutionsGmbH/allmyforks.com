"use strict";

const log = require('./log');
const config = require('./config');
const HttpStatus = require('http-status-codes');
const request = require('request');

const WAIT_IN_MS = config.request.repeatSleep;
const REQUEST_TIMEOUT = config.request.timeout;

const doRequest = (uri, curTry, maxTry, lastError) => {
  return new Promise((resolve, reject) => {
    if (curTry >= maxTry) {
      log.warn("Request can not be completed. Max retry reached: " + uri);
      reject(lastError);
      return;
    }

    log.info("[CALL][START] " + uri);
    request({uri: uri, timeout: REQUEST_TIMEOUT}, (err, resp, body) => {
      log.info("[CALL][DONE] " + uri);

      if (err || resp.statusCode === HttpStatus.TOO_MANY_REQUESTS) {
        log.debug("Request error or too many requests. Retry: " + uri);

        //retry in <WAIT_IN_MS>ms
        setTimeout(() => {
          doRequest(uri, curTry + 1, maxTry, err)
            .then((resolved) => {
              resolve(resolved);
            }, (err) => {
              reject(err);
            });
        }, WAIT_IN_MS);

        return;
      }

      return resolve({
        response: resp,
        body: body,
      });
    });

  });
};

const repeatRequest = (uri, maxRepeat = config.request.maxRetry) => {
  return doRequest(uri, 0, maxRepeat);
};

module.exports = repeatRequest;