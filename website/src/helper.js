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

var localDate = function (valueUTC, format, defaultValue, currentLanguage) {
    if (valueUTC && (valueUTC.indexOf('GMT') > 0 || valueUTC.indexOf('Z') === valueUTC.length - 1)) {
        var date = new Date(valueUTC)

        if (date instanceof Date && !isNaN(date)) {
            if (format === 'datetime') {
                return date.toLocaleString(currentLanguage.id)
            } else if (format === 'date') {
                return date.toLocaleDateString(currentLanguage.id)
            } else if (format === 'time') {
                return date.toLocaleTimeString(currentLanguage.id)
            } else if (format === 'monthAndYear') {
                return date.toLocaleString(currentLanguage.id, {month: "long", year: "numeric"})
            } else if (format === 'year') {
                return date.toLocaleString(currentLanguage.id, {year: "numeric"})
            }
        }
    }
}

var localDateInSpan = function (valueUTC, format, currentLanguage) {
    return '<span data-date-utc="' + valueUTC + '" data-date-format="' + format + '">' + localDate(valueUTC, format, valueUTC, currentLanguage) + '</span>'
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
            return Object.assign(e, {
                id: e.id,
                url: getSameUrl(data, e, data.language),
                selected: (data.coin.id === e.id ? 'selected' : ''),
                title: e.name
            })
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
    mathHelper: mathHelper,
    localDateInSpan: localDateInSpan
}
