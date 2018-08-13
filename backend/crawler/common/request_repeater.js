"use strict";

const log = require('../../common/log');
const HttpStatus = require('http-status-codes');
const request = require('request');

const RequestRepeater = function(config){
  const REQUEST_TIMEOUT = config.request.timeout;
  const MAX_RETRY = config.request.maxretry;

  const confgTime = function(response, body) {
    return config.request.repeatsleep
  };

  const doRequest = function(uri, determineSleepTime, curTry, maxTry, lastError){
    return new Promise((resolve, reject) => {
      if (curTry >= maxTry) {
        log.warn("Request can not be completed. Max retry reached: " + uri);
        reject(lastError);
        return;
      }

      log.info("[CALL][START] " + uri);
      request({uri: uri, timeout: REQUEST_TIMEOUT}, (err, resp, body) => {
        log.info("[CALL][DONE] " + uri);

        if (err || resp.statusCode !== HttpStatus.OK) {
          const statusCode = resp ? resp.statusCode : -1
          switch(statusCode) {
            case HttpStatus.TOO_MANY_REQUESTS:
            case HttpStatus.IM_A_TEAPOT:
              log.debug("Request error or too many requests. Retry: " + uri);

              //retry in <WAIT_IN_MS>ms
              setTimeout(() => {
                doRequest(uri, curTry + 1, maxTry, err)
                .then((resolved) => {
                  resolve(resolved);
                }, (err) => {
                  reject(err);
                });
              }, determineSleepTime(resp, body));
          }

          return;
        }

        return resolve({
          response: resp,
          body: body,
        });
      });

    });
  };

  const repeatRequest = function (uri, determineSleepTime = confgTime, maxRepeat = MAX_RETRY) {
    return doRequest(uri, determineSleepTime, 0, maxRepeat);
  };

  return {
    request: repeatRequest
  }
};

module.exports = RequestRepeater;