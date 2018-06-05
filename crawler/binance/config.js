"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    repeatsleep: 65000,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "binance"
  },
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};