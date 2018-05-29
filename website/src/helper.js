var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '' || value == undefined || isNaN(value)) {
        return '-' + '&nbsp;' + currentFiat.shortName
    }

    /* fiatWithCurrency(e.price, currentFiat, currentLanguage) */

    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName
}


var getListUrl = function (coin, fiat, language) {
    return '/' + language.id + '/' + coin.id + '/' + fiat.id + '/'
}

var getSelectorsLangFiatCoins = function (data) {


    return {

        selectLanguages: data.languages.map((e) => {
            return {
                value: getListUrl(data.coin, data.fiat, e),
                selected: (data.language.id === e.id ? 'selected' : ''),
                title: e.name
            }
        }),

        selectFiats: data.fiats.map((e) => {
            return {
                value: getListUrl(data.coin, e, data.language),
                selected: (data.fiat.id === e.id ? 'selected' : ''),
                title: e.name
            }
        }),

        selectCoins: data.coinsWithForks.map((e) => {
            return {
                value: getListUrl(e, data.fiat, data.language),
                selected: (data.coin.id === e.id ? 'selected' : ''),
                title: e.name
            }
        }),
    }
}


module.exports = {
    fiatWithCurrency: fiatWithCurrency,
    getSelectorsLangFiatCoins: getSelectorsLangFiatCoins,
}
