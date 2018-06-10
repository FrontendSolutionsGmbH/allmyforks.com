function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var enrichWithCalculations = function (currentCoin) {
    var sumValues = 0

    if (currentCoin.forks && currentCoin.forks.length > 0) {
        currentCoin.forks.map((e, index) => {

            if (isNumeric(e.price)) {
                e.priceTimesForkRatio = e.price * e.ratio

                sumValues += e.priceTimesForkRatio


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

            } else {
                e.priceTimesForkRatio = ''
            }


        })
    }


    currentCoin.priceSumForks = sumValues
    currentCoin.priceSumForksPlusOwnPrice = currentCoin.price + sumValues
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
        var mergedCoin = Object.assign(d, crawledCoin)


        /* if (!mergedCoin.price) {
         mergedCoin.price = 31 / e.ratio
         }*/

        if (isNumeric(mergedCoin.price)) {
            mergedCoin.price = parseFloat(mergedCoin.price)
        }


        return mergedCoin
    })

    // add information also to fork objects
    data.coins = data.coins.map((d) => {
        if (d.forks) {

            d.forks = d.forks.map((ff) => {
                var mergedCoin = data.coins.find(cf => cf.id === ff.id)
                var newMergedCoin = Object.assign(ff, mergedCoin)


                if (!newMergedCoin.dateFormat) {
                    newMergedCoin.dateFormat = "date"
                }

                return newMergedCoin
            })
        }

        return d
    })

    // we need to call it twice to make sure everything gets all information, aargh :)
    for (i = 0; i < 2; i++) {
        // add information
        data.coins = data.coins.map((d) => {
            enrichWithCalculations(d)
            return d
        })

        //add information also to forks
        data.coins = data.coins.map((d) => {
            if (d.forks) {

                d.forks = d.forks.map((ff) => {
                    var mergedCoin = data.coins.find(cf => cf.id === ff.id)
                    return Object.assign(mergedCoin, ff)
                })
            }

            return d
        })
    }


    // add parent information
    data.coins = data.coins.map((d) => {


        // add information also to fork objects
        data.coins.map((other) => {

            if (other.forks && other.forks.find(cf => cf.id === d.id)) {
                if (d.parents === undefined) {
                    d.parents = []
                }

                d.parents.push(other)
            }

            return d
        })

        return d
    })


    // sort forks by highest price*ratio
    // add parent information
    data.coins = data.coins.map((d) => {
        if (d.forks) {
            d.forks.sort((a, b) => {
                return b.priceTimesForkRatio - a.priceTimesForkRatio
            })

        }

        return d
    })


    return data
}
module.exports = {
    mergeData: mergeData
}
