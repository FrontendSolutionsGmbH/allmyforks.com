"use strict";

const log = require('./log');

const ENV_PREFIX = 'CFG_';

let config = {
  request: {
    timeout: 60000,
    repeatSleep: 1000,
    maxRetry: 10
  },
  output: {
    dir: "./"
  },
  job: {
    interval: 600000
  }
};

outer: for(let curEnv of Object.keys(process.env)) {
  if(curEnv.startsWith(ENV_PREFIX)) {
    let rawName = curEnv.substr(ENV_PREFIX.length).toLowerCase();
    let configVar = config;

    let path = rawName.split('_');
    for (let i = 0; i < path.length - 1; i++) {
      if(! configVar[path[i]] ) continue outer;

      configVar = configVar[path[i]];
    }

    configVar[path[path.length - 1]] = process.env[curEnv];
    log.info('Override value by Environment: ' + curEnv);
  }
}

module.exports = config;
