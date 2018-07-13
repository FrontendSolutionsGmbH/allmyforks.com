const mongoose = require('mongoose');
const CourseHistorical = require('./db/historical')
const config = require('./config');

const check = function(dbConnection){
  if(!dbConnection) return false;
  if(!dbConnection.url) return false;
  if(!dbConnection.name) return false;

  return true;
}

/**
 * Checks all configured databases for courses and
 * merge them together to a list of trading pairs.
 *
 * @param sources a list of sources
 * [{
 *  "name": "someExchange",
 *  "url": "mongodb://localhost/someExchange"
 * }]
 */
const find = function(sources = config.source){
  let allPromises = []

  for(let dbCon of sources) {
    //skip invalid connections
    if(!check(dbCon)) continue;

    let mc = mongoose.createConnection(dbCon.url)
    let model = mc.model(CourseHistorical.name, CourseHistorical.schema)

    let p = model.aggregate([{
      $group: {
        _id: {
          from: {name: "$from.name", type: "$from.type"},
          to: {name: "$to.name", type: "$to.type"}
        }
      }
    }])
    .then(pairs => pairs.map(pair => {
      return {
        from: pair._id.from,
        to: pair._id.to,
        source: {
          name: dbCon.name,
          type: dbCon.type || 'price',
        }
      }
    }))

    allPromises.push(p)
  }

  //join all results
  return Promise.all(allPromises)
    .then(results => {
      let allPairs = []

      for(let result of results) {
        allPairs.push(...result)
      }

      return allPairs
    })
}

//do we call directly?
if (require.main === module) {
  find().then(pairs => {
    for(let pair of pairs) {
      console.log(pair)
    }
  }).catch(err => {
    console.log("Something went wrong!", err)
  })
}

module.exports = find;