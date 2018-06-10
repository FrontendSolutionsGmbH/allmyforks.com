"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    repeatsleep: 60000,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "bitfinex"
  },
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};