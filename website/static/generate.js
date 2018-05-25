var Handlebars = require('handlebars');
var fs = require('fs');
const forkData = require('./res/bitcoin-forks.js')
const helper = require('./helper.js')

const donations = [
    {
        "name": "Bitcoin",
        "address": "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
    }]

const fiats = [
    {
        "name": "Dollar",
        "shortName": "$",
        "ratio": 1.0
    },
    {
        "name": "Euro",
        "shortName": "€",
        "ratio": 0.849855227
    },

]

const coins = [
    {
        "name": "Bitcoin",
        "shortName": "BTC",
    },
    {
        "name": "Ethereum",
        "shortName": "ETH"
    },
    {
        "name": "Bitcoin Cash",
        "shortName": "BCH"
    }
]
const languages = [
    {
        "name": "English",
        "shortName": "en",
        "decimalSeparator": "."
    },
    {
        "name": "Deutsch",
        "shortName": "de",
        "decimalSeparator": ","
    }
]

var source = fs.readFileSync('static/list.html', 'utf8')
var sortableJS = fs.readFileSync('static/res/sortable.js')
var w3proCss = fs.readFileSync('static/res/w3pro.css')
source = source.replace('{{{styles}}}', '<style>' + w3proCss + '</style>')
source = source.replace('{{{javascript}}}', '<script type="text/javascript">' + sortableJS + '</script>')


var template = Handlebars.compile(source)
var currentCoin = forkData.coins[0]
var currentLanguage = languages[0]
var currentFiat = fiats[0]

var tableAndSum = helper.getTableForksAndSumValue(currentCoin, currentFiat, currentLanguage)


var data = {
    donations: donations,
    languages: languages,
    coins: coins,
    fiats: fiats,

    coin: currentCoin,
    language: currentLanguage,
    fiat: currentFiat,

    tableForks: tableAndSum.htmlTable,
    sumForks: tableAndSum.htmlSum
}

var selectors = helper.getSelectorsLangFiatCoins(data)

data.selectLanguages = selectors.selectLanguages
data.selectFiats = selectors.selectFiats
data.selectCoins = selectors.selectCoins


var result = template(data)


console.log(result)

fs.writeFileSync('static/output.html', result)