var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '') {
        return ''
    }

    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName
}

var getTableForksAndSumValue = function (currentCoin, currentFiat, currentLanguage) {
    var htmlToAdd = '<table class="w3-table sortable" id="table-forks"><tr><th>#</th><th>Name</th><th class="w3-hide-small">Fork date</th><th class="w3-hide-small">Fork Block</th><th class="w3-hide-small">Price</th><th class="w3-hide-small">1 ' + currentCoin.shortName + '=</th><th>1 ' + currentCoin.shortName + '=</th><th>Change (24h)</th><th>Price Graph (7d)</th></tr>'


    var sumValues = 0

    currentCoin.forks.map((e, index) => {
        var priceTimesRatio = e.price * e.ratio
        sumValues += priceTimesRatio

        var graph = ''

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

            var values = e.priceHistory.reduce((t, e, i) => (t ? t + 'L ' : 'M') + '' + i * fx + ' ' + (e - min) * fy, '')
            graph = '<svg xmlns="http://www.w3.org/2000/svg" version="1" width="' + width + '" height="' + height + '">'


            graph += '<path stroke="#f7931a" stroke-width="2" fill="transparent" stroke-linecap="square" d="' + values + '"/>'
            graph += '</svg>'
        }


        htmlToAdd += '<tr><td sorttable_customkey="' + index + '">#' + (index + 1) + '</td><td><a href="' + e.link + '">' + e.name + '</a></td><td class="w3-hide-small">' + e.date + '</td><td class="w3-hide-small">' + e.block + '</td><td class="w3-hide-small" sorttable_customkey="' + e.price + '">' + fiatWithCurrency(e.price, currentFiat, currentLanguage) + '</td><td class="w3-hide-small">' + e.ratio + ' ' + e.shortName + '</td><td sorttable_customkey="' + priceTimesRatio + '">' + fiatWithCurrency(priceTimesRatio, currentFiat, currentLanguage) + '</td><td>+ 2%</td><td>' + graph + '</td></tr>'
    })

    htmlToAdd += '</table>'

    return {
        htmlTable: htmlToAdd,
        htmlSum: fiatWithCurrency(sumValues, currentFiat, currentLanguage)
    }
}

var getListUrl = function (coin, fiat, language) {
    return '/' + language.id + '/' + coin.id + '/' + fiat.id + '/'
}

var getSelectorsLangFiatCoins = function (data) {


    return {
        selectLanguages: data.languages.map(e => '<option value="' + getListUrl(data.coin, data.fiat, e) + '" ' + (data.language.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>'),
        selectFiats: data.fiats.map(e => '<option value="' + getListUrl(data.coin, e, data.language) + '" ' + (data.fiat.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>'),
        selectCoins: data.coins.map(e => '<option value="' + getListUrl(e, data.fiat, data.language) + '" ' + (data.coin.id === e.id ? 'selected' : '' ) + '>' + e.name + '</option>')
    }
}

module.exports = {
    fiatWithCurrency: fiatWithCurrency,
    getTableForksAndSumValue: getTableForksAndSumValue,
    getSelectorsLangFiatCoins: getSelectorsLangFiatCoins
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