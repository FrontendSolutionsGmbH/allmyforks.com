/**
 *
 * @param tradingPairs a list of trading pairs:
 * [{
 *  "from": {
 *    "name": "BTC",
 *    "type": "crypto"
 *  },
 *  "to": {
 *    "name": "EUR",
 *    "type": "fiat"
 *  },
 *  "source": "bitcoin.de"
 * }]
 * @param source the source currency
 * {
 *   "name": "BTC",
 *   "type": "crypto"
 * }
 * @param destination the destination currency
 * {
 *   "name": "EUR",
 *   "type": "fiat"
 * }
 *
 * @return Array with a array of list of nodes (trading pairs)
 * [
 *  [{
 *    "from": {
 *      "name": "BTC",
 *      "type": "crypto"
 *    },
 *    "to": {
 *      "name": "EUR",
 *      "type": "fiat"
 *    },
 *    "source": "bitcoin.de"
 *   }]
 * ]
 */
const find = function(tradingPairs, source, destination){
  let result = []

  let possible = tradingPairs.filter(tp => {
    if(tp.from.name === source.name && tp.from.type === source.type) {
      if(tp.to.name === destination.name && tp.to.type === destination.type) {
        return true;
      }
    }

    return false;
  })

  if(possible.length !== 0) {
    result.push(...possible.map(tp => [tp]));
  }

  //try to route
  let possibleStarts = tradingPairs.filter(tp => {
    if(tp.from.name === source.name && tp.from.type === source.type) {
      return true;
    }

    return false;
  })

  //go through all possible starts
  //and try to find the target
  for(let start of possibleStarts) {
    let tmpSrc = start.to
    let purgedPairs = tradingPairs.filter(tp => {
      if(tp.to.name === tmpSrc.name && tp.to.type === tmpSrc.type) {
        return false;
      }

      return true;
    })

    //recursion ahead!
    let paths = find(purgedPairs, tmpSrc, destination)

    for(let curPath of paths) {
      result.push([start, ...curPath])
    }
  }

  //sort by path length
  return result.sort((pathA, pathB) => {
    if(pathA.length > pathB.length) {
      return 1
    }
    if(pathA.length < pathB.length) {
      return -1
    }
    return 0
  })
}

module.exports = find;
