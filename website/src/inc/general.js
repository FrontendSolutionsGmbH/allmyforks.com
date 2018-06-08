

var fiatWithCurrency = function (value, currentFiat, currentLanguage) {

    if (value === '' || value == undefined || isNaN(value)) {
        return '-' + '&nbsp;' + currentFiat.shortName
    }
    return (value * currentFiat.ratio).toFixed(2).replace('.', currentLanguage.decimalSeparator) + '&nbsp;' + currentFiat.shortName
}
var params = {};
if (location.search) {
    var parts = location.search.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

var currentFiatId = params.fiat || (window.localStorage && window.localStorage.getItem('fiat')) || 'dollar'

var fiats = { {{#each fiats}} {{id}}:{shortName: '{{shortName}}', ratio: {{ratio}} } {{#unless @last}},{{/unless}}  {{/each}} }
var lang = {{#with language}} {id: '{{id}}', shortName: '{{shortName}}', decimalSeparator: '{{decimalSeparator}}' }{{/with}}

if (currentFiatId !== 'dollar' && fiats[currentFiatId]) {

	var currElems = document.querySelectorAll('[data-curr]')
	for (var i = 0, len = currElems.length; i < len; i++) {
	    currElems[i].innerHTML =  fiatWithCurrency(currElems[i].dataset.curr, fiats[currentFiatId], lang)
	}


	document.querySelector('[data-fiat-option="'+currentFiatId+'"]').selected = true;
}

var localDate = function(valueUTC, format, defaultValue, currentLanguage) {
    var date = new Date(valueUTC)

    if (date instanceof Date && !isNaN(date)) {
        if (format === 'datetime') {
            return date.toLocaleString(currentLanguage.id)
        } else if (format === 'date'){
            return date.toLocaleDateString(currentLanguage.id)
        } else if (format === 'time'){
            return date.toLocaleTimeString(currentLanguage.id)
        }
    }
    
    return defaultValue
}
var currElems = document.querySelectorAll('[data-date-utc]')
for (var i = 0, len = currElems.length; i < len; i++) {
    var format = currElems[i].dataset.dateFormat
    currElems[i].innerHTML = localDate(currElems[i].dataset.dateUtc, format, currElems[i].dataset.dateUtc, lang)
}

window.localStorage && window.localStorage.setItem('fiat', currentFiatId);


