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

var template = Handlebars.compile(sourceList)
var templateImprint = Handlebars.compile(sourceImprint)
var templatePrivacy = Handlebars.compile(sourcePrivacy)
var templateDetails = Handlebars.compile(sourceDetails)
var templateHowTo = Handlebars.compile(sourceHowTo)
var templateLinks = Handlebars.compile(sourceLinks)
var templateSupportUs = Handlebars.compile(sourceSupportUs)
var templateJavascript = Handlebars.compile(javascriptAsString)

Handlebars.registerPartial('header-static', fs.readFileSync('./src/inc/header-static.html', 'utf8'))
Handlebars.registerPartial('header-list', fs.readFileSync('./src/inc/header-list.html', 'utf8'))
Handlebars.registerPartial('footer', sourceFooter)
Handlebars.registerPartial('styles', '<style>' + stylesAsString + '</style>')

var generateListHTMLSite = function (data, dir) {
    var result = template(data)
    console.log('generate', dir + '/index.html')
    fs.writeFileSync(dir + '/index.html', result)
}

var generateDetailsHTMLSite = function (data, dir) {

    var result = templateDetails(data)

    console.log('generate', dir + '/index.html')
    fs.writeFileSync(dir + '/index.html', result)

}

var generateStaticGeneralSites = function (data, dir) {

    console.log('generate', dir + '/imprint.html')
    fs.writeFileSync(dir + '/imprint.html', templateImprint(data))


    console.log('generate', dir + '/privacy.html')
    fs.writeFileSync(dir + '/privacy.html', templatePrivacy(data))


    console.log('generate', dir + '/howto.html')
    fs.writeFileSync(dir + '/howto.html', templateHowTo(data))


    console.log('generate', dir + '/links.html')
    fs.writeFileSync(dir + '/links.html', templateLinks(data))


    console.log('generate', dir + '/supportus.html')
    fs.writeFileSync(dir + '/supportus.html', templateSupportUs(data))
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


    Handlebars.registerPartial('javascript', '<script type="text/javascript">' + templateJavascript(mergedData) + '</script>')


    data.selectLanguages = data.languages.map((e) => {
        return {
            id: e.id,
            value: '../' + e.id + '/',
            selected: (data.language.id === e.id ? 'selected' : ''),
            title: e.name
        }
    })

    data.header.title = 'bla'
    generateStaticGeneralSites(data, dir)

    fs.mkdirSync(dir + '/list')
    fs.mkdirSync(dir + '/details')
    mergedData.coins.map((coin) => {
        data.coin = coin;

        
        dir = './dist/' + lang.id + '/list/' + coin.id
        fs.mkdirSync(dir)


        data.fiat =  mergedData.fiats[0]
        var selectors = helper.getSelectorsLangFiatCoins(data)

        data.selectLanguages = selectors.selectLanguages
        data.selectFiats = selectors.selectFiats
        data.selectCoins = selectors.selectCoins

        if (coin.forks && coin.forks.length > 0) {
            generateListHTMLSite(data, dir)
        }

        dir = './dist/' + lang.id + '/details/' + coin.id
        fs.mkdirSync(dir)

        generateDetailsHTMLSite(data, dir)
    })


})


mergedData.languages.map((lang) => {
    fs.copySync('./dist/'+lang.id+'/list/bitcoin/index.html', './dist/'+lang.id+'/index.html')
    console.log('copied', './dist/'+lang.id+'/list/bitcoin/index.html', './dist/'+lang.id+'/index.html')
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