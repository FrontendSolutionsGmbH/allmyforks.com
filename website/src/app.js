var query = window.location.search.substring(1);
var qs = parse_query_string(query);


const donations = [
    {
        "Name": "Bitcoin",
        "Address": "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
    }]

const fiatCurrencies = [
    {
        "Name": "Dollar",
        "ShortName": "$",
        "Ratio": 1.0
    },
    {
        "Name": "Euro",
        "ShortName": "€",
        "Ratio": 0.849855227
    },

]

const forkableCurrencies = [
    {
        "Name": "Bitcoin",
        "ShortName": "BTC",
    },
    {
        "Name": "Ethereum",
        "ShortName": "ETH",
    },
    {
        "Name": "Bitcoin Cash",
        "ShortName": "BCH",
    }
]
const languages = [
    {
        "Name": "English",
        "ShortName": "en",
        "DecimalSeparator": "."
    },
    {
        "Name": "Deutsch",
        "ShortName": "de",
        "DecimalSeparator": ","
    }
]

const config = {
    lang: qs.lang || sessionStorage.getItem('lang') || languages[0].ShortName,
    fiat: qs.fiat || sessionStorage.getItem('fiat') || fiatCurrencies[0].Name,
    coin: qs.coin || sessionStorage.getItem('coin') || forkableCurrencies[0].ShortName
}

var currentFiat = fiatCurrencies.find(function (element) {
    return element.Name === config.fiat;
});

var currentLanguage = languages.find(function (element) {
    return element.ShortName === config.lang;
});


const fiatWithCurrency = function (value) {

    if (value === '') {
        return ''
    }

    return (value * currentFiat.Ratio).toFixed(2).replace('.', currentLanguage.DecimalSeparator) + ' ' + currentFiat.ShortName
}

sessionStorage.setItem('lang', config.lang);
sessionStorage.setItem('fiat', config.fiat);

console.log(config)

var tableOuterElem = document.getElementById('table-forks-outer')
var sum = document.getElementById('sum-forks')
var sum2 = document.getElementById('sum-forks-top')

var htmlToAdd = '<table class="w3-table sortable" id="table-forks"><tr><th>#</th><th>Name</th><th class="w3-hide-small">Fork date</th><th class="w3-hide-small">Fork Block</th><th class="w3-hide-small">Price</th><th class="w3-hide-small">1 BTC=</th><th>1 BTC=</th></tr>'


var sumValues = 0

var data = window.data
data.coins[0].forks.map((e, index) => {
    var priceTimesRatio = e.Price * e.Ratio
    sumValues += priceTimesRatio
    htmlToAdd += '<tr><td sorttable_customkey="' + index + '">#' + (index + 1) + '</td><td><a href="' + e.Link + '">' + e.Name + '</a></td><td class="w3-hide-small">' + e.Date + '</td><td class="w3-hide-small">' + e.Block + '</td><td class="w3-hide-small" sorttable_customkey="' + e.Price + '">' + fiatWithCurrency(e.Price) + '</td><td class="w3-hide-small">' + e.Ratio + ' ' + e.ShortName + '</td><td sorttable_customkey="' + priceTimesRatio + '">' + fiatWithCurrency(priceTimesRatio) + '</td></tr>'
})


sum.innerHTML = '<b>1 BTC= Sum forks ' + fiatWithCurrency(sumValues) + '</b>'
sum2.innerHTML = '<b>1 BTC= Sum forks ' + fiatWithCurrency(sumValues) + '</b>'

tableOuterElem.innerHTML = htmlToAdd + '</table>'


var tableDonations = document.getElementById('table-donations')
var htmlToAdd = '' //<tr><th>Name</th><th>Address</th></tr>'


document.getElementById('select-languages').innerHTML = languages.map(e => '<option value="?coin=' + config.coin + '&fiat=' + config.fiat + '&lang=' + e.ShortName + '" ' + (config.lang === e.ShortName ? 'selected' : '' ) + '>' + e.Name + '</option>')
document.getElementById('select-currencies').innerHTML = fiatCurrencies.map(e => '<option value="?coin=' + config.coin + '&lang=' + config.lang + '&fiat=' + e.Name + '" ' + (config.fiat === e.Name ? 'selected' : '' ) + '>' + e.Name + '</option>')
document.getElementById('select-forks').innerHTML = forkableCurrencies.map(e => '<option value="?fiat=' + config.fiat + '&lang=' + config.lang + '&coin=' + e.ShortName + '" ' + (config.coin === e.ShortName ? 'selected' : '' ) + '>' + e.Name + '</option>')


donations.map((e, index) => {

    var row = document.createElement('tr')
    htmlToAdd += '<tr><td>' + e.Name + '</a></td><td>' + e.Address + '</td></tr>'
})

//tableDonations.innerHTML = htmlToAdd