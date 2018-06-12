"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  output: {
    dir: "./"
  },
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};