const dataBTCForks = require('./local-btc-forks.js')
const dataLTCForks = require('./local-ltc-forks.js')
const dataETHForks = require('./local-eth-forks.js')
const dataPages = require('./local-pages-links.js')
const dataFiats = require('./local-fiats-donations-languages-markets.js')

const data = {
    coins: [...dataBTCForks,
        ...dataLTCForks,
        ...dataETHForks
    ],
    ...dataPages,
    ...dataFiats
}


module.exports = data