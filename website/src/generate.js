var Handlebars = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');

var fs = require('fs-extra');
const helper = require('./helper.js')
const aggregator = require('./aggregator.js')

var sourceList = fs.readFileSync('./src/pages/forklist.html', 'utf8')
var sourceImprint = fs.readFileSync('./src/pages/imprint.html', 'utf8')
var sourcePrivacy = fs.readFileSync('./src/pages/privacy.html', 'utf8')
var sourceDisclaimer = fs.readFileSync('./src/pages/disclaimer.html', 'utf8')
var sourceHowTo = fs.readFileSync('./src/pages/howtoclaimforkedcoins.html', 'utf8')
var sourceApi = fs.readFileSync('./src/pages/api.json', 'utf8')
var sourceSupportUs = fs.readFileSync('./src/pages/supportus.html', 'utf8')
var sourceWhatAreForks = fs.readFileSync('./src/pages/whatisafork.html', 'utf8')
var sourceDetails = fs.readFileSync('./src/pages/details.html', 'utf8')
var javascriptAsString = fs.readFileSync('./src/inc/custom.js', 'utf8') + '\r\n' + fs.readFileSync('./src/inc/sortable.js', 'utf8')
var stylesAsString = fs.readFileSync('./src/inc/w3.css', 'utf8') + fs.readFileSync('./src/inc/custom.css', 'utf8')
var sourceFooter = fs.readFileSync('./src/inc/footer.html', 'utf8')

const crawledData = require('./input/crawl.json')
const localData = require('./input/local.js')

var mergedData = aggregator.mergeData(localData, crawledData)

HandlebarsIntl.registerWith(Handlebars);
Handlebars.registerHelper('fiatWithCurrency', helper.fiatWithCurrency);
Handlebars.registerHelper('fiatWithCurrencyInSpan', helper.fiatWithCurrencyInSpan);
Handlebars.registerHelper("math", helper.mathHelper);
Handlebars.registerHelper("localDateInSpan", helper.localDateInSpan);
Handlebars.registerHelper("localDate", helper.localDate);
Handlebars.registerHelper("ifCond", helper.ifConditionHelper);

Handlebars.registerHelper("prettifyDate", function (timestamp) {
    //console.log('Handlebars', Handlebars.helpers.formatTime(timestamp, "datetime"))

    //return Handlebars.helpers.formatTime(timestamp, "datetime")
    timestamp
})

Handlebars.registerHelper("ifNumber", function (n, defaultText, options) {
    var isNumber = !isNaN(parseFloat(n)) && !isNaN(n - 0)

    if (isNumber) {
        return options.fn(this);
    } else {
        return defaultText
    }
})


var templateList = Handlebars.compile(sourceList)
var templateImprint = Handlebars.compile(sourceImprint)
var templatePrivacy = Handlebars.compile(sourcePrivacy)
var templateDetails = Handlebars.compile(sourceDetails)
var templateHowTo = Handlebars.compile(sourceHowTo)
var templateApi = Handlebars.compile(sourceApi)
var templateWhatAreForks = Handlebars.compile(sourceWhatAreForks)
var templateSupportUs = Handlebars.compile(sourceSupportUs)
var templateJavascript = Handlebars.compile(javascriptAsString)
var templateDisclaimer = Handlebars.compile(sourceDisclaimer)

Handlebars.registerPartial('header-static', fs.readFileSync('./src/inc/header.html', 'utf8'))
Handlebars.registerPartial('header-list', fs.readFileSync('./src/inc/header.html', 'utf8'))
Handlebars.registerPartial('footer', sourceFooter)
Handlebars.registerPartial('styles', '<style>' + stylesAsString + '</style>')
//Handlebars.registerPartial('prettifyDate', sourceFooter)


var generatePage = function (data, directoryFromRoot, templateFunc, pageId, raw, filenameWanted) {
    var directory = './dist/' + directoryFromRoot
    if (!filenameWanted) {
        filenameWanted = 'index.html'
    }
    var filename = directory + '/' + filenameWanted
    fs.ensureDirSync(directory)
    console.log('generate', filename)


    if (!raw) {
        data.url = '/' + directoryFromRoot
        data.pageId = pageId || 'default'

        var selectors = helper.getSelectorsLangFiatCoins(data)

        data.selectLanguages = selectors.selectLanguages
        data.selectFiats = selectors.selectFiats
        data.selectCoins = selectors.selectCoins

        data.title = Handlebars.compile(data.pages[data.pageId].title)(data)
        data.description = Handlebars.compile(data.pages[data.pageId].description)(data)
    }


    fs.writeFileSync(filename, templateFunc(data, {
        data: data,
    }))
}


var generateStaticGeneralSites = function (data, dir) {

    generatePage(data, dir + '/imprint', templateImprint, 'imprint')
    generatePage(data, dir + '/privacy', templatePrivacy, 'privacy')
    generatePage(data, dir + '/how-to-claim-forked-coins', templateHowTo, 'howto')
    generatePage(data, dir + '/what-is-a-fork', templateWhatAreForks, 'whatareforks')
    generatePage(data, dir + '/support-allmyforks', templateSupportUs, 'supportus')
    generatePage(data, dir + '/disclaimer', templateDisclaimer, 'disclaimer')

}

fs.removeSync('./dist')
fs.mkdirSync('./dist')


var data = mergedData;

data.coinsWithForks = data.coins.filter(f => f.forks && f.forks.length > 0)
data.timestamp = Date.now()
data.dateTime = (new Date()).toUTCString()


data.fiat = data.fiats[0]
data.coin = data.coins[0]
data.language = data.languages[0]
data.mvp = true


var apiObject = helper.preventCircularJson(Object.assign({}, crawledData))
//delete(apiObject.languages)
//generatePage({data: JSON.stringify(apiObject, null, 4)}, '', templateApi, 'api', true, 'api.json')

data.languages.map((lang) => {
    data.language = lang

    data.intl = lang.messages
    data.intl.locales = lang.id
    data.intl.formats = {
        "time": {
            "datetime": {
                "day": "2-digit",
                "month": "2-digit",
                "year": "numeric",
                "hour": "numeric",
                "minute": "numeric",
                "second": "numeric"
            },

            "day": {
                "day": "2-digit",
                "month": "2-digit",
                "year": "numeric"
            },

        },
        "number": {
            "percentage": {
                "style": "percent"
            }
        }
    }

    var dir = lang.id

    Handlebars.registerPartial('javascript', '<script type="text/javascript">' + templateJavascript(data) + '</script>')
    data.selectLanguages = data.languages.map((e) => {
        return {
            id: e.id,
            value: '../' + e.id + '/',
            selected: (data.language.id === e.id ? 'selected' : ''),
            title: e.name
        }
    })

    generateStaticGeneralSites(data, dir)

    data.coins.map((coin) => {
        data.coin = coin;
        dir = lang.id + '/list/' + coin.id


        if (coin.forks && coin.forks.length > 0) {
            generatePage(data, dir, templateList, 'list')
        }

        dir = lang.id + '/details/' + coin.id
        generatePage(data, dir, templateDetails, 'details')
    })


})


data.languages.map((lang) => {
    fs.copySync('./dist/' + lang.id + '/list/bitcoin/index.html', './dist/' + lang.id + '/index.html')
    console.log('copied', './dist/' + lang.id + '/list/bitcoin/index.html', './dist/' + lang.id + '/index.html')
})
fs.copySync('./dist/en/index.html', './dist/index.html')
fs.copySync('./src/static', './dist/')
console.log('copied', './dist/en/index.html', './dist/index.html')