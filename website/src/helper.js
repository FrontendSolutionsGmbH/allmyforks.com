var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '' || value == undefined || isNaN(value)) {
        return '-' + '&nbsp;' + currentFiat.shortName
    }

    /* fiatWithCurrency(e.price, currentFiat, currentLanguage) */

    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName 
}

var fiatWithCurrencyInSpan =function (value, currentFiat, currentLanguage) {
    return '<span data-curr="'+value+'">' + fiatWithCurrency(value,currentFiat, currentLanguage) + '</span>'
}
var getListUrl = function (coin, fiat, language) {
    return '/' + language.id + (coin.id === 'bitcoin' ? '' : '/list/' + coin.id) + ((fiat && fiat.id !== 'dollar') ?  '?fiat=' + fiat.id : '')
}

var getSelectorsLangFiatCoins = function (data) {


    return {

        selectLanguages: data.languages.map((e) => {
            return {
                id: e.id,
                value: getListUrl(data.coin, null, e),
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
                value: getListUrl(e, null, data.language),
                selected: (data.coin.id === e.id ? 'selected' : ''),
                title: e.name
            }
        }),
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
