const util = require('util');
const localData = require('../src/input/local.js')
const fs = require('fs-extra');
const outputDir = './src/input/crawl/'
var coins = localData.coins

console.log('lets aggregate ' + coins.length)
var apiCrypto = baseUrl + '/api/ratios/crypto/'

console.log('crypto-api: ' + apiCrypto)
console.log('local-crypto-tokens: ' + coins.length)





var aggregateData = function (coins) {


    var promises = coins.map((coin)=> {
        var url = apiCrypto + coin.shortName
        return fetch(url)
            .then((res) => {
                if (res.status === 200) {
                    //  console.log('fetching success ', res.status, coin.shortName)
                    return res.json()
                } else {
                    console.log('status != 200', coin.shortName, res.status)
                    return {fail: true}
                }
            }).catch((res) => {
                console.log('network problem', coin.shortName, res.message)
                return {}
            }).then((json) => {
                var fileName = outputDir + coin.id + '.json'
                if (json.ratios && json.ratios.length < 1) {
                    console.log('no data', coin.shortName)
                }
                if (!fs.existsSync(fileName) || json.fail !== true) {
                    fs.writeFileSync(fileName, JSON.stringify(json, null, 2), 'utf-8')
                }
                return json
            })
    })


    return Promise.all(promises)
}

