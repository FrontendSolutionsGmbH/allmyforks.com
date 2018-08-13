"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    cooldown: 90000,
    batch: 40,
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