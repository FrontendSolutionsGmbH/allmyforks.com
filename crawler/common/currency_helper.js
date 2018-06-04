const cc = require('currency-codes');

const isFiat = function(symbol) {
  const currency = cc.code(symbol.toUpperCase());
  return currency !== null && currency !== undefined;
}

const typeOf = function(symbol) {
  if(isFiat(symbol)) {
    return 'fiat'
  }

  return 'crypto'
}

const toCurrency = function(symbol) {
  return {
    name: symbol.toUpperCase(),
    type: typeOf(symbol)
  }
}

module.exports = {
  isFiat, typeOf, toCurrency
};
