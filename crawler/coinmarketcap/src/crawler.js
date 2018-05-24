"use strict";

const request = require('./request_repeater');
const config = require('./config');
const log = require('./log');
const fs = require("fs");
const moment = require("moment");

const MIN_DATE = moment('2010-01-01');
const OUTPUT_DIR = config.output.dir;

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

const historical = function(){
  return new Promise((resolve, reject) => {
    const timestamp = moment().format('YYYYMMDD-HHmm');

    //first we need to know which coins ar listed
    request("https://api.coinmarketcap.com/v2/listings/").then(({body}) => {
      let writePromises = [];
      let requestPromises = [];

      writePromises.push(write(`${OUTPUT_DIR}/listing${timestamp}.json`, body));
      let jsonBody = JSON.parse(body);

      //now we can crawl each coin
      for(let coin of jsonBody.data) {
        const start = MIN_DATE.format('YYYYMMDD');
        const end = moment().add(-1, 'days').format('YYYYMMDD');
        const url = `https://coinmarketcap.com/currencies/${coin.website_slug}/historical-data/?start=${start}&end=${end}`;

        //crawl the coin
        requestPromises.push(new Promise((reqResolve, reqReject) => {
          request(url).then(({body}) => {
            writePromises.push(write(`${OUTPUT_DIR}/${coin.symbol}_${timestamp}.json`, body));
            reqResolve();
          }).catch(reqReject)
        }));
      }

      //first wait for all requests
      Promise.all(requestPromises).then(() => {

        //after that wait for all writings
        Promise.all(writePromises).then(resolve).catch(reject)
      }).catch(reject)
    }).catch(err => reject(err))
  });
};

const ticker = function(){
    return new Promise((resolve, reject) => {
      reject("Not implemented yet!");
    });
  };

module.exports = {
  historical, ticker
};