"use strict";

let winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.json()
  )
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}else{
  logger.add(new winston.transports.Console({
    format: winston.format.json()
  }));
}

const origErr = logger.error;
logger.error = function(message, err) {
  if(err) origErr.call(logger, message + ' ' + err.stack);
  else origErr.call(logger, message);
};

logger.debug = (message, ...args) => {
  logger.log('debug', message, ...args)
}

module.exports = logger;
