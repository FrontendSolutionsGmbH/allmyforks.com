"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};