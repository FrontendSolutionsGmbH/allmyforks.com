"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    cooldown: 60000,
    batch: 50,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "coinbase"
  },
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};