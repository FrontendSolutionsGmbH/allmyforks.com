const DEFAULT_MAX_DEPTH = Number.MAX_VALUE

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
 *  "source": {
 *    "name": "bitcoin.de",
 *    "type": "exchange"
*    }
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
 * @param maxDepth the maximal depth to go in
 * @param currentDepth the current depth (only for recursive purposes)
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
 *    "source": {
 *      "name": "bitcoin.de",
 *      "type": "exchange"
       }
 *   }]
 * ]
 */
const find = function(tradingPairs, source, destination, maxDepth = DEFAULT_MAX_DEPTH, currentDepth = 0){
  let result = []

  if(currentDepth >= maxDepth) {
    return result;
  }

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
    let paths = find(purgedPairs, tmpSrc, destination, maxDepth, currentDepth + 1)

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

module.exports = {
  DEFAULT_MAX_DEPTH,
  find
};
