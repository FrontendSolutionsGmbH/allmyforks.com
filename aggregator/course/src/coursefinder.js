const mongoose = require('mongoose');
const CourseHistorical = require('./db/historical')
const config = require('./config');
const pathfinder = require('./pathfinder')
const pairfinder = require('./pairfinder')

const connections = {}

const getConnection = function(source, sources = config.source){
  if(!connections[source]) {
    for(let dbCon of sources) {
      if(dbCon.name === source){
        let mc = mongoose.createConnection(dbCon.url)
        let model = mc.model(CourseHistorical.name, CourseHistorical.schema)

        connections[source] = {
          connection: mc,
          model: model
        }

        break;
      }
    }
  }

  return connections[source]
}

const resolvePath = function(path) {
  let promises = []
  let courses = new Array(path.length)

  for(let i=0; i < path.length; i++) {
    const node = path[i]
    const dbCon = getConnection(node.source)

    let p = dbCon.model.find({
      "from.name": node.from.name,
      "from.type": node.from.type,
      "to.name": node.to.name,
      "to.type": node.to.type,
    })
    .limit(1)
    .sort({ date: -1 })
    .select({ "close": 1, "_id": 0})
    .lean()
    .then(result => {
      courses[i] = result[0].close
    })

    promises.push(p)
  }

  return Promise.all(promises)
    .then(() => {
      let ratio = 1;

      for(let course of courses) {
        ratio *= course
      }

      return {
        ratio, path
      }
    })
}

/**
 * Get all found ratios of given source
 *
 * @param source The source currency
 * {
 *  "name": "BTC",
 *  "type": "crypto"
 * }
 * @param destination The destination currency
 * {
 *  "name": "USD",
 *  "type": "fiat"
 * }
 * @return An array with all found ratios
 * [{
 *   "ratio": 13.12,
 *   "path": [{
 *     "from": {
 *       "name": "BTC",
 *       "type": "crypto"
 *     },
 *     "to": {
 *       "name": "USD",
 *       "type": "fiat"
 *     },
 *     "source": "coinbase.com"
 *   }]
 * }]
 */
const getRatios = function(source, destination = { name: 'USD', type: 'fiat' }){
  return pairfinder()
    .then(pairs => pathfinder(pairs, source, destination))
    .then(paths => paths.map(resolvePath))
    .then(promises => Promise.all(promises))
}

//do we call directly?
if (require.main === module) {
  getRatios({ name: 'EOS', type: 'crypto'}).then(ratios => {
    for(let ratio of ratios) {
      console.log(JSON.stringify(ratio, null, 2))
    }
  }).catch(err => {
    console.log("Something went wrong!", err)
  })
}

module.exports = getRatios;