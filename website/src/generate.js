var Handlebars = require('handlebars');
var fs = require('fs-extra');
const helper = require('./helper.js')

var sourceList = fs.readFileSync('./src/list.html', 'utf8')
var sourceImprint = fs.readFileSync('./src/imprint.html', 'utf8')
var javascriptAsString = fs.readFileSync('./src/inc/sortable.js', 'utf8')
var stylesAsString = fs.readFileSync('./src/inc/w3pro.css', 'utf8')
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

var template = Handlebars.compile(sourceList)
var templateImprint = Handlebars.compile(sourceImprint)

Handlebars.registerPartial('header-static', fs.readFileSync('./src/inc/header-static.html', 'utf8'))
Handlebars.registerPartial('header-list', fs.readFileSync('./src/inc/header-list.html', 'utf8'))
Handlebars.registerPartial('footer', sourceFooter)
Handlebars.registerPartial('javascript', '<script type="text/javascript">' + javascriptAsString + '</script>')
Handlebars.registerPartial('styles', '<style>' + stylesAsString + '</style>')

var generateListHTMLSite = function (data, dir) {
    var selectors = helper.getSelectorsLangFiatCoins(data)

    data.selectLanguages = selectors.selectLanguages
    data.selectFiats = selectors.selectFiats
    data.selectCoins = selectors.selectCoins
    data.header.title = ''
    var result = template(data)

    console.log('generate', dir + '/index.html')
    fs.writeFileSync(dir + '/index.html', result)

}

var generateStaticGeneralSites = function (data, dir) {

    console.log('generate', dir + '/imprint.html')
    fs.writeFileSync(dir + '/imprint.html', templateImprint(data))
}

fs.removeSync('./dist')
fs.mkdirSync('./dist')


var data = mergedData;

data.coinsWithForks = mergedData.coins.filter(f => f.forks)
data.timestamp = Date.now()


mergedData.languages.map((lang) => {
    data.language = lang
    var dir = './dist/' + lang.id
    fs.mkdirSync(dir)


    data.selectLanguages = data.languages.map((e) => {
        return {
            value: '../' + e.id + '/imprint.html',
            selected: (data.language.id === e.id ? 'selected' : ''),
            title: e.name
        }
    }),

        data.header.title = 'bla'
    generateStaticGeneralSites(data, dir)

    mergedData.coins.filter(f => f.forks).map((coin) => {
        data.coin = coin

        dir = './dist/' + lang.id + '/' + coin.id
        fs.mkdirSync(dir)

        mergedData.fiats.map((fiat) => {
            data.fiat = fiat
            dir = './dist/' + lang.id + '/' + coin.id + '/' + fiat.id
            fs.mkdirSync(dir)

            generateListHTMLSite(data, dir)
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