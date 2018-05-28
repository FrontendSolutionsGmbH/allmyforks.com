var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '' || value == undefined || isNaN(value)) {
        return '-' + '&nbsp;' + currentFiat.shortName
    }

/* fiatWithCurrency(e.price, currentFiat, currentLanguage) */

    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName
}

var enrichWithCalculations = function (currentCoin, currentFiat, currentLanguage) {
    var sumValues = 0

    currentCoin.forks.map((e, index) => {
        var priceTimesRatio = e.price * e.ratio
        sumValues += priceTimesRatio

        if (!e.priceHistory) {
            e.priceHistory = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(),]
        }
        if (e.priceHistory) {
            var max = Math.max(...e.priceHistory)
            var min = Math.min(...e.priceHistory)
            var width = 128
            var height = 32
            var fx = width / (e.priceHistory.length - 1)
            var fy = height / (max - min)
            e.priceGraphData = {
                 width: width,
                height: height,
                 data: e.priceHistory.reduce((t, e, i) => (t ? t + 'L ' : 'M') + '' + i * fx + ' ' + (e - min) * fy, '')
            }
        }

        e.priceTimesForkRatio = priceTimesRatio
    })

    currentCoin.priceSumForks = sumValues
}

var getListUrl = function (coin, fiat, language) {
    return '/' + language.id + '/' + coin.id + '/' + fiat.id + '/'
}

var getSelectorsLangFiatCoins = function (data) {


    return {
        selectLanguages: data.languages.map(e => '<option value="' + getListUrl(data.coin, data.fiat, e) + '" ' + (data.language.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>'),
        selectFiats: data.fiats.map(e => '<option value="' + getListUrl(data.coin, e, data.language) + '" ' + (data.fiat.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>'),
        selectCoins: data.coinsWithForks.map(e => '<option value="' + getListUrl(e, data.fiat, data.language) + '" ' + (data.coin.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>')
    }
}


var mergeData = function (localData, crawledData) {
    var data = {
        fiats: localData.fiats,
        donations: localData.donations,
        languages: localData.languages,
        coins: localData.coins
    }

    data.fiats = data.fiats.map((f) => {
        var crawledFiat = crawledData.fiats.find(cf => cf.id === f.id)
        return Object.assign(f, crawledFiat)
    })

    data.coins = data.coins.map((d) => {
        var crawledCoin = crawledData.coins.find(cf => cf.id === d.id)
        crawledCoin = Object.assign(d, crawledCoin)

        if (crawledCoin.forks) {

            crawledCoin.forks = crawledCoin.forks.map((ff) => {
                var crawledForkCoin = crawledData.coins.find(cf => cf.id === ff.id)
                var localCoin = localData.coins.find(cf => cf.id === ff.id)
                return Object.assign(ff, localCoin, crawledForkCoin)
            })
        }

        return crawledCoin

    })
    return data
}
module.exports = {
    fiatWithCurrency: fiatWithCurrency,
    enrichWithCalculations: enrichWithCalculations,
    getSelectorsLangFiatCoins: getSelectorsLangFiatCoins,
    mergeData: mergeData
}

/*
 var tableDonations = document.getElementById('table-donations')
 var htmlToAdd = '' //<tr><th>Name</th><th>Address</th></tr>'


 document.getElementById('select-languages').innerHTML = languages.map(e => '<option value="?coin=' + config.coin + '&fiat=' + config.fiat + '&lang=' + e.ShortName + '" ' + (config.lang === e.ShortName ? 'selected' : '' ) + '>' + e.Name + '</option>')
 document.getElementById('select-currencies').innerHTML = fiatCurrencies.map(e => '<option value="?coin=' + config.coin + '&lang=' + config.lang + '&fiat=' + e.Name + '" ' + (config.fiat === e.Name ? 'selected' : '' ) + '>' + e.Name + '</option>')
 document.getElementById('select-forks').innerHTML = forkableCurrencies.map(e => '<option value="?fiat=' + config.fiat + '&lang=' + config.lang + '&coin=' + e.ShortName + '" ' + (config.coin === e.ShortName ? 'selected' : '' ) + '>' + e.Name + '</option>')


 donations.map((e, index) => {

 var row = document.createElement('tr')
 htmlToAdd += '<tr><td>' + e.Name + '</a></td><td>' + e.Address + '</td></tr>'
 })

 */