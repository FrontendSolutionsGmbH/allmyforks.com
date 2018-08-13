"use strict";

const log = require('../../common/log');
const request = require('./src/request_repeater');
const fs = require("fs");


const write = function(path, content){
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if(err) {
        log.error(`Could not write ${path}!`, err);
        reject(err)
      }else{
        log.debug(`Finish writing ${path}.`);
        resolve()
      }
    })
  })
};

const get = function(url, directory, suffix){
  if(!suffix) {
    suffix = '.html'
  }

  return request(url)
    .then(({body}) => write(`${directory}/${new Date().toISOString()}${suffix}`, body));
};

module.exports = {
  get,
};