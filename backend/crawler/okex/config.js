"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 30000,
    cooldown: 30000,
    batch: 100,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "okex"
  },
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};