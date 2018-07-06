"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  debug: {
    heap: {
      dump: {
        directory: './'
      }
    }
  },
  output: {
    dir: "./"
  },
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};