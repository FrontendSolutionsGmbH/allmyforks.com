var Handlebars = require('handlebars');
var fs = require('fs-extra');
const helper = require('./helper.js')

var source = fs.readFileSync('./src/list.html', 'utf8')
var sortableJS = fs.readFileSync('./src/inc/sortable.js', 'utf8')
var w3proCss = fs.readFileSync('./src/inc/w3pro.css', 'utf8')
var sourceHeader = fs.readFileSync('./src/inc/header.html', 'utf8')
var sourceFooter = fs.readFileSync('./src/inc/footer.html', 'utf8')


const crawledData = require('./input/crawl.json')
const localData = require('./input/local.js')

var mergedData = helper.mergeData(localData, crawledData)
mergedData.languages.map((lang) => {
    mergedData.coins.filter(f => f.forks).map((coin) => {
        mergedData.fiats.map((fiat) => {
            helper.enrichWithCalculations(coin, fiat, lang)
        })
    })
})

Handlebars.registerHelper('fiatWithCurrency', helper.fiatWithCurrency);
Handlebars.registerHelper("prettifyDate", function (timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd hh:mm:ss')
});

var template = Handlebars.compile(source)
var templateHeader = Handlebars.compile(sourceHeader)
var templateFooter = Handlebars.compile(sourceFooter)
Handlebars.registerPartial('header', sourceHeader)
Handlebars.registerPartial('footer', sourceFooter)
Handlebars.registerPartial('javascript', '<script type="text/javascript">' + sortableJS + '</script>')
Handlebars.registerPartial('styles', '<style>' + w3proCss + '</style>')

var generateListHTML = function (currentCoin, currentLanguage, currentFiat) {


    var data = {
        donations: mergedData.donations,
        languages: mergedData.languages,
        coins: mergedData.coins,
        coinsWithForks: mergedData.coins.filter(f => f.forks),
        fiats: mergedData.fiats,

        coin: currentCoin,
        language: currentLanguage,
        fiat: currentFiat,

        timestamp: Date.now()
    }

    var selectors = helper.getSelectorsLangFiatCoins(data)

    data.selectLanguages = selectors.selectLanguages
    data.selectFiats = selectors.selectFiats
    data.selectCoins = selectors.selectCoins


    var result = template(data)

    return result
}


fs.removeSync('./dist')
fs.mkdirSync('./dist')
mergedData.languages.map((lang) => {
    fs.mkdirSync('./dist/' + lang.id)
    mergedData.coins.filter(f => f.forks).map((coin) => {

        fs.mkdirSync('./dist/' + lang.id + '/' + coin.id)
        mergedData.fiats.map((fiat) => {
            var dir = './dist/' + lang.id + '/' + coin.id + '/' + fiat.id
            fs.mkdirSync(dir)

            var result = generateListHTML(coin, lang, fiat)
            console.log('generate', dir + '/index.html')
            fs.writeFileSync(dir + '/index.html', result)
        })
    })

})
fs.copySync('./dist/en/bitcoin/dollar/index.html', './dist/index.html')
fs.copySync('./src/static', './dist/')

/*
 var currentCoin = mergedData.coins[0]
 var currentLanguage = languages[0]
 var currentFiat = fiats[0]
 var result = generateListHTML(currentCoin, currentLanguage, currentFiat)
 console.log(result)a
 fs.writeFileSync('static/output.html', result)aaa
 */