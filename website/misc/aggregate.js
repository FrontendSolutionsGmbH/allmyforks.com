const util = require('util');
const localData = require('../src/input/local.js')
const fs = require('fs-extra');
const crawlDir = './src/input/crawl/'
const outputDir = './src/input/'
var coins = localData.coins
console.log('lets aggregate ' + coins.length + ' cryptos')

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
}

var missingCryptos = []
var foundCryptos = []
var emptyCryptos = []

var aggregateData = function (coins) {

    return coins.map((coin) => {
        var result = {
            id: coin.id,
            price: '',
            // ratios: []
        }
        var fileName = crawlDir + coin.id + '.json'

        if (!fs.existsSync(fileName)) {
            console.log('file does not exist for coin', coin.id)
            missingCryptos.push(coin)
        } else {
            crawledCoin = JSON.parse(fs.readFileSync(fileName))

            if (crawledCoin.ratios && crawledCoin.ratios.length > 0) {
                // result.ratios = crawledCoin.ratios
                //result.price = Math.max(...(result.ratios.map(r=>r.ratio)))
                result.price = crawledCoin.ratios[0].ratio
                result.ratios = crawledCoin.ratios
                foundCryptos.push(coin)
            } else {
                emptyCryptos.push(coin)
            }

        }

        return result

    })

}


var data = aggregateData(coins)
var result = {
    coins: data
}
result.fiats = [
    {
        "id": "dollar",
        "ratio": 1
    },
    {
        "id": "euro",
        "ratio": 0.849855227
    }
]

var fileName = outputDir + 'crawl.json'
fs.writeFileSync(fileName, JSON.stringify(result, null, 2), 'utf-8')

console.log('completed - ' + missingCryptos.length + ' missing, ' + emptyCryptos.length + ' without pairs, ' + foundCryptos.length + ' succesfull of ' + coins.length + ' cryptos to ' + fileName)

console.log('found: ', foundCryptos.reduce((t, v) => {
    return t + ' ' + v.shortName
}, ''))

console.log('missing pairs: ', emptyCryptos.reduce((t, v) => {
    return t + ' ' + v.shortName
}, ''))