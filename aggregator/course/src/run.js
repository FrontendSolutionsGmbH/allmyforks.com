const config = require('./config');
const coursefinder = require('./coursefinder');
const cron = require('cron');
const fs = require('fs')

new cron.CronJob(config.cron, () => {
  let promises = []

  for(let symbol of config.symbol) {
    coursefinder({
      name: symbol,
      type: 'crypto'
    })
    .then(ratios => new Promise((resolve, reject) => {
      fs.writeFile(`${config.output.dir}/${symbol}.json`, JSON.stringify(ratios), (err) => {
        if(err) reject(err)
        else resolve()
      })
    }))
  }

  Promise.all(promises)
  .then(() => {
    console.log("Done.")
  }).catch(err => {
    console.log("Failed: ", err)
  })
}, null, true);