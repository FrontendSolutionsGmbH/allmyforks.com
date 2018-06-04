var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '' || value == undefined || isNaN(value)) {
        return '-' + '&nbsp;' + currentFiat.shortName
    }

    /* fiatWithCurrency(e.price, currentFiat, currentLanguage) */

    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName
}

var fiatWithCurrencyInSpan = function (value, currentFiat, currentLanguage) {
    return '<span data-curr="' + value + '">' + fiatWithCurrency(value, currentFiat, currentLanguage) + '</span>'
}
var getListUrl = function (coin, fiat, language) {
    return '/' + language.id + (coin.id === 'bitcoin' ? '' : '/list/' + coin.id) + ((fiat && fiat.id !== 'dollar') ? '?fiat=' + fiat.id : '')
}

var getSameUrl = function (data, coin, language) {
    var newUrl = data.url

    if (data.language.id === 'en') {
        if (newUrl === '/') {
            newUrl = '/' + data.language.id + '/list/' + coin.id
        }
    }
    newUrl = newUrl.replace('/' + data.coin.id, '/' + coin.id)
    newUrl = newUrl.replace('/' + data.language.id, '/' + language.id)

    if (newUrl === '/en/list/bitcoin') {
        newUrl = '/'
    } else if (newUrl.endsWith('/list/bitcoin')) {
        newUrl = newUrl.replace('/list/bitcoin', '')
    }
    return newUrl
}


var getSelectorsLangFiatCoins = function (data) {


    return {

        selectLanguages: data.languages.map((e) => {
            return {
                id: e.id,
                value: getSameUrl(data, data.coin, e),
                selected: data.language.id === e.id ? 'selected' : '',
                title: e.name
            }
        }),

        selectFiats: data.fiats.map((e) => {
            return {
                id: e.id,
                value: '?fiat=' + e.id,
                selected: (data.fiat.id === e.id ? 'selected' : ''),
                title: e.name
            }
        }),

        selectCoins: data.coinsWithForks.map((e) => {
            return {
                id: e.id,
                value: getSameUrl(data, e, data.language),
                selected: (data.coin.id === e.id ? 'selected' : ''),
                title: e.name
            }
        })
    }
}


var mathHelper = function (lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
}

module.exports = {
    fiatWithCurrency: fiatWithCurrency,
    fiatWithCurrencyInSpan: fiatWithCurrencyInSpan,
    getSelectorsLangFiatCoins: getSelectorsLangFiatCoins,
    mathHelper: mathHelper
}
