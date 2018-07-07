function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var enrichPricesAndParents = function (coin) {

    /*if (!coin.priceHistory) {
     coin.priceHistory = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
     }*/

    if (coin.price && coin.priceHistory) {
        var max = Math.max(...coin.priceHistory)
        var min = Math.min(...coin.priceHistory)
        var width = 128
        var height = 32
        var fx = width / (coin.priceHistory.length - 1)
        var fy = height / (max - min)
        coin.priceGraphData = {
            width: width,
            height: height + 10,
            data: coin.priceHistory.reduce((t, e, i) => (t ? t + 'L ' : 'M') + '' + i * fx + ' ' + (((e - min) * fy) + 5), '')
        }

        if (coin.priceHistory.length > 1 && coin.priceHistory[1] > 0.0) {
            coin.priceChangeOneDayPercentage = (coin.priceHistory[0] - coin.priceHistory[1]) / coin.priceHistory[1]
            coin.priceChangeOneDayIsPositive = coin.priceChangeOneDayPercentage > 0.0
            coin.priceChangeOneDayIsNegative = coin.priceChangeOneDayPercentage < 0.0
        }

        if (coin.priceHistory.length > 7 && coin.priceHistory[1] > 0.0) {
            coin.priceChangeSevenDaysPercentage = (coin.priceHistory[0] - coin.priceHistory[7]) / coin.priceHistory[7]
            coin.priceChangeSevenDaysIsPositive = coin.priceChangeSevenDaysPercentage > 0.0
            coin.priceChangeSevenDaysIsNegative = coin.priceChangeSevenDaysPercentage < 0.0
        }

    }


    coin.parents.map((p) => {
        if (isNumeric(coin.price)) {
            p.priceTimesForkRatio = coin.price * p.ratio
        } else {
            p.priceTimesForkRatio = ''
        }

        if (!p.dateFormat) {
            p.dateFormat = "date"
        }
    })

    if (coin.id === 'bitcoincash') {
        //  console.log(coin)
        //process.exit()
    }
    return coin
}

var enrichForks = function (currentCoin) {
    var sumValues = 0

    if (currentCoin.forks && currentCoin.forks.length > 0) {
        currentCoin.forks.map((e, index) => {
            var parentThis = e.parents.find(cf => cf.id === currentCoin.id)
            e.ratio = parentThis.ratio
            e.block = parentThis.block
            e.date = parentThis.date
            e.priceTimesForkRatio = parentThis.priceTimesForkRatio
            e.dateFormat = parentThis.dateFormat

            if (isNumeric(e.priceTimesForkRatio)) {
                sumValues += e.priceTimesForkRatio
            }


        })
    }

    currentCoin.priceSumForks = sumValues
    currentCoin.priceSumForksPlusOwnPrice = currentCoin.price + sumValues

    return currentCoin
}


var mergeData = function (localData, crawledData) {
    var data = {
        fiats: localData.fiats,
        donations: localData.donations,
        languages: localData.languages,
        coins: localData.coins,
        pages: localData.pages,
        links: localData.links,
        markets: localData.markets
    }


    // merge fiat crawled and local information
    data.fiats = data.fiats.map((f) => {
        var crawledFiat = crawledData.fiats.find(cf => cf.id === f.id)
        return Object.assign(f, crawledFiat)
    })

    // merge only raw information per coin
    data.coins = data.coins.map((d) => {
        var crawledCoin = crawledData.coins.find(cf => cf.id === d.id)


        var mergedCoin = d
        if (d.isCrawlable) {
            mergedCoin = Object.assign(d, crawledCoin)
        }


        if (isNumeric(mergedCoin.price)) {
            mergedCoin.price = parseFloat(mergedCoin.price)
        }


        if (!mergedCoin.forks) {
            mergedCoin.forks = []
        }

        return mergedCoin
    })

    // add calculation for each coin:  priceHistory, parentCalculation
    data.coins = data.coins.map((d) => {
        return enrichPricesAndParents(d)
    })

    // generate forks array
    data.coins.map((d) => {
        if (d.parents && d.parents.length > 0) {
            d.parents.map((p) => {
                var parentCoin = data.coins.find(cf => cf.id === p.id)
                if (parentCoin) {
                    parentCoin.forks.push(d)
                }
            })
        }
    })

    // do fork calculation
    data.coins = data.coins.map((d) => {
        return enrichForks(d)
    })


    // sort forks by highest price*ratio
    // add parent information
    data.coins = data.coins.map((d) => {
        if (d.forks) {
            d.forks.sort((a, b) => {
                return b.priceTimesForkRatio - a.priceTimesForkRatio
            })
        }

        if (d.ratios) {
            d.ratios.sort((a, b) => {
                return b.courses[0] - a.courses[0]
            })


            d.markets = []

            d.ratios.map(r => {

                r.isValid = true
                r.path && r.path.map(p => {
                    p.url = 'http://' + p.source
                    p.title = p.source

                    if (p.source === 'coinmarketcap.com') {
                        var fullLink = d.links.find(l => l.type === 'coinmarketcap')
                        if (fullLink) {
                            p.url = fullLink.url
                        }
                        r.isValid = false
                    }

                    if (p.source === 'coinbase.com') {
                        p.url = 'https://www.coinbase.com/join/5b40a148fae66f091eaecf4a'
                        p.hasReferral = true
                    }

                    if (p.source === 'binance.com') {
                        p.url = 'https://www.binance.com/en/trade/' + p.from.name + '_' + p.to.name + '?ref=35365745'
                        p.hasReferral = true
                    }

                    if (p.source === 'okex.com') {
                        p.url = 'https://www.okex.com/market?product=' + p.from.name.toLowerCase() + '_' + p.to.name.toLowerCase()
                    }
                    /* if (p.source === 'bitfinex.com') {
                     p.url = 'https://www.bfxdata.com/orderbooks/' +  p.from.name.toLowerCase() + p.to.name.toLowerCase()
                     }*/
                    if (p.source === 'fiat') {
                        p.url = ''
                        p.title = ''
                    }


                })
            })

            d.ratiosValid = d.ratios.filter(r => r.isValid)

            d.ratiosValid.map(r => {
                r.path && r.path.map(p => {

                    if (p.source === 'fiat') {
                        return
                    }

                    var index = d.markets.findIndex(m => m.source === p.source)
                    if (index >= 0) {
                        if (r.courses[0] > d.markets[index].ratio) {
                            d.markets[index].ratio = r.courses[0]
                            d.markets[index].url = r.courses[0]
                        }
                    } else {
                        d.markets.push({
                            hasReferral: p.hasReferral,
                            url: p.url,
                            title: p.title,
                            source: p.source,
                            ratio: r.courses[0]
                        })
                    }

                })
            })

            d.markets.sort((a, b) => {
                return b.ratio - a.ratio
            })


        }


        if (d.parents) {
            d.parents = d.parents.map((p) => {
                var fullParent = data.coins.find(cf => cf.id === p.id)
                return Object.assign(p, fullParent)
            })
        }

        return d
    })


    return data
}
module.exports = {
    mergeData: mergeData
}


// new

// merge with remote
// add calculation for each coin:  priceHistory, parentCalculation
// generate forks array
// add calculation for each coin: priceSumForks,priceSumForksPlusOwnPrice + b) flatten fork parents with parent == self
// sortiere forks