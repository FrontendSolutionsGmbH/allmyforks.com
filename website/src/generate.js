var Handlebars = require('handlebars');
var fs = require('fs-extra');
const helper = require('./helper.js')
const aggregator = require('./aggregator.js')

var sourceList = fs.readFileSync('./src/list.html', 'utf8')
var sourceImprint = fs.readFileSync('./src/imprint.html', 'utf8')
var sourcePrivacy = fs.readFileSync('./src/privacy.html', 'utf8')
var sourceHowTo = fs.readFileSync('./src/howto.html', 'utf8')
var sourceSupportUs = fs.readFileSync('./src/supportus.html', 'utf8')
var sourceLinks = fs.readFileSync('./src/links.html', 'utf8')
var sourceDetails = fs.readFileSync('./src/details.html', 'utf8')
var javascriptAsString = fs.readFileSync('./src/inc/general.js', 'utf8') + '\r\n' + fs.readFileSync('./src/inc/sortable.js', 'utf8')
var stylesAsString = fs.readFileSync('./src/inc/w3pro.css', 'utf8')
var sourceFooter = fs.readFileSync('./src/inc/footer.html', 'utf8')


const crawledData = require('./input/crawl.json')
const localData = require('./input/local.js')

var mergedData = aggregator.mergeData(localData, crawledData)


Handlebars.registerHelper('fiatWithCurrency', helper.fiatWithCurrency);
Handlebars.registerHelper('fiatWithCurrencyInSpan', helper.fiatWithCurrencyInSpan);
Handlebars.registerHelper("math", helper.mathHelper);

Handlebars.registerHelper("prettifyDate", function (timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd hh:mm:ss')
});

var templateList = Handlebars.compile(sourceList)
var templateImprint = Handlebars.compile(sourceImprint)
var templatePrivacy = Handlebars.compile(sourcePrivacy)
var templateDetails = Handlebars.compile(sourceDetails)
var templateHowTo = Handlebars.compile(sourceHowTo)
var templateLinks = Handlebars.compile(sourceLinks)
var templateSupportUs = Handlebars.compile(sourceSupportUs)
var templateJavascript = Handlebars.compile(javascriptAsString)

Handlebars.registerPartial('header-static', fs.readFileSync('./src/inc/header-list.html', 'utf8'))
Handlebars.registerPartial('header-list', fs.readFileSync('./src/inc/header-list.html', 'utf8'))
Handlebars.registerPartial('footer', sourceFooter)
Handlebars.registerPartial('styles', '<style>' + stylesAsString + '</style>')

var generatePage = function (data, directoryFromRoot, templateFunc) {
    var directory = './dist/' + directoryFromRoot
    var filename = directory + '/' + 'index.html'
    fs.ensureDirSync(directory)
    console.log('generate', filename)
    data.url = '/' + directoryFromRoot

    var selectors = helper.getSelectorsLangFiatCoins(data)

    data.selectLanguages = selectors.selectLanguages
    data.selectFiats = selectors.selectFiats
    data.selectCoins = selectors.selectCoins


    fs.writeFileSync(filename, templateFunc(data))
}


var generateStaticGeneralSites = function (data, dir) {

    generatePage(data, dir + '/imprint', templateImprint)
    generatePage(data, dir + '/privacy', templatePrivacy)
    generatePage(data, dir + '/howto', templateHowTo)
    generatePage(data, dir + '/links', templateLinks)
    generatePage(data, dir + '/supportus', templateSupportUs)

}

fs.removeSync('./dist')
fs.mkdirSync('./dist')


var data = mergedData;

data.coinsWithForks = mergedData.coins.filter(f => f.forks)
data.timestamp = Date.now()


data.fiat = mergedData.fiats[0]
data.coin = mergedData.coins[0]
data.language = mergedData.languages[0]

mergedData.languages.map((lang) => {
    data.language = lang
    var dir = lang.id

    Handlebars.registerPartial('javascript', '<script type="text/javascript">' + templateJavascript(mergedData) + '</script>')
    data.selectLanguages = data.languages.map((e) => {
        return {
            id: e.id,
            value: '../' + e.id + '/',
            selected: (data.language.id === e.id ? 'selected' : ''),
            title: e.name
        }
    })

    generateStaticGeneralSites(data, dir)

    mergedData.coins.map((coin) => {
        data.coin = coin;
        dir = lang.id + '/list/' + coin.id


        if (coin.forks && coin.forks.length > 0) {
            generatePage(data, dir, templateList)
        }

        dir = lang.id + '/details/' + coin.id
        generatePage(data, dir, templateDetails)
    })


})


mergedData.languages.map((lang) => {
    fs.copySync('./dist/' + lang.id + '/list/bitcoin/index.html', './dist/' + lang.id + '/index.html')
    console.log('copied', './dist/' + lang.id + '/list/bitcoin/index.html', './dist/' + lang.id + '/index.html')
})
fs.copySync('./dist/en/index.html', './dist/index.html')
fs.copySync('./src/static', './dist/')
console.log('copied', './dist/en/index.html', './dist/index.html')

/*aaa
 var currentCoin = mergedData.coins[0]
 var currentLanguage = languages[0]
 var currentFiat = fiats[0]
 var result = generateListHTML(currentCoin, currentLanguage, currentFiat)
 console.log(result)a
 fs.writeFileSync('static/output.html', result)aaa
 */