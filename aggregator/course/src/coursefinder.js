const mongoose = require('mongoose');
const CourseHistorical = require('./db/historical')
const CourseTicker = require('./db/ticker')
const config = require('./config');
const pathfinder = require('./pathfinder')
const pairfinder = require('./pairfinder')

const connections = {}
const getConnection = function(sourceName, sources = config.source){
  if(!connections[sourceName]) {
    for(let dbCon of sources) {
      if(dbCon.name === sourceName){
        let mc = mongoose.createConnection(dbCon.url)

        connections[sourceName] = {
          connection: mc,
          model: {
            ticker: mc.model(CourseTicker.name, CourseTicker.schema),
            historical: mc.model(CourseHistorical.name, CourseHistorical.schema)
          }
        }

        break;
      }
    }
  }

  return connections[sourceName]
}

const freeMemory = function() {
  //mongoose holds a lot of data inside the connections/models
  //see: https://github.com/Automattic/mongoose/issues/2874

  for(let ck of Object.keys(connections)) {
    let connectionHolder = connections[ck]

    //remove models
    for(let modelName of Object.keys(connectionHolder.connection.models)){
      delete connectionHolder.connection.models[modelName]
    }

    //remove collections
    for(let collectionName of Object.keys(connectionHolder.connection.collections)){
      delete connectionHolder.connection.collections[collectionName]
    }

    //close connection
    connectionHolder.connection.close()

    //delete from connections
    delete connections[ck]
  }

  if (global.gc) global.gc();
}

const getSave = function(array, index, defaultValue) {
  if(!array) return defaultValue;

  if(index >= array.length) {
    if(index === 0) return defaultValue;

    return getSave(array, index - 1, defaultValue)
  }

  return array[index];
}

const resolvePath = function(path, days) {
  let promises = []
  let hops = new Array(path.length)

  for(let i=0; i < path.length; i++) {
    const node = path[i]
    const dbCon = getConnection(node.source.name)

    //first we look at ticker -> there are the latest courses (if available)
    //second we look for the rest in the historical

    let p = dbCon.model.ticker.find({
      "from.name": node.from.name,
      "from.type": node.from.type,
      "to.name": node.to.name,
      "to.type": node.to.type,
    })
    .select({ "course": 1, "date": 1, "_id": 0 })
    .lean()
    .then(result => {
      hops[i] = {
        courses: []
      }

      let count = 0;
      for(let doc of result) {
        hops[i].courses.push({
          ratio: doc.course,
          date: doc.date
        })
        count++;
      }

      node.courses = hops[i].courses

      return count;
    })
    .then((courseCount) => {
      const fetchLimit = days - courseCount;
      if(fetchLimit <= 0) return;

      let hP = dbCon.model.historical.find({
        "from.name": node.from.name,
        "from.type": node.from.type,
        "to.name": node.to.name,
        "to.type": node.to.type,
      })
      .limit(fetchLimit)
      .sort({ date: -1 })
      .select({ "close": 1, "date": 1, "_id": 0})
      .lean()
      .then(result => {
        for(let doc of result) {
          hops[i].courses.push({
            ratio: doc.close,
            date: doc.date
          })
        }
      })

      return hP
    })

    promises.push(p)
  }

  return Promise.all(promises)
    .then(() => {
      let result = {
        courses: [],
        minDate: null,
        maxDate: null,
        path
      }

      for(let i=0; i < days; i++) {
        result.courses.push(1)

        for(let hop of hops) {
          let hopCourse = getSave(hop.courses, i, { ratio: 1})
          result.courses[i] *= hopCourse.ratio

          if(!result.minDate || result.minDate > hopCourse.date) {
            result.minDate = hopCourse.date
          }
          if(!result.maxDate || result.maxDate < hopCourse.date) {
            result.maxDate = hopCourse.date
          }
        }
      }

      return result
    })
}

const DEFAULT_DESTINATION = { name: 'USD', type: 'fiat' }
const DEFAULT_DAYS = 1

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
 * @param days how many historical days should be returned
 * @return An array with all found ratios
 * [{
 *   "courses": [ 13.12 ],
 *   "maxDate: "2018-12-13T00:00:00.000Z",
 *   "minDate: "2018-12-13T00:00:00.000Z",
 *   "path": [{
 *     "from": {
 *       "name": "BTC",
 *       "type": "crypto"
 *     },
 *     "to": {
 *       "name": "USD",
 *       "type": "fiat"
 *     },
 *     "courses": [{
 *      "ratio": 13.12,
 *      "date": "2018-12-13T00:00:00.000Z"
 *     }]
 *     "source": "coinbase.com"
 *   }]
 * }]
 */
const getRatios = function(source, destination = DEFAULT_DESTINATION, days = DEFAULT_DAYS){
  return pairfinder()
    .then(pairs => pathfinder(pairs, source, destination))
    .then(paths => paths.map(path => resolvePath(path, days)))
    .then(promises => Promise.all(promises))
    .then(result => {
      freeMemory();
      return result;
    })
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

module.exports = {
  DEFAULT_DESTINATION,
  DEFAULT_DAYS,
  getRatios
};