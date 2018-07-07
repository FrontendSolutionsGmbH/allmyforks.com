"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    cooldown: 30000,
    batch: 400,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "binance"
  },
  mapping: [{
    from: "BCC",
    to: "BCH",
    name: "BitcoinCash"
  }],
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};