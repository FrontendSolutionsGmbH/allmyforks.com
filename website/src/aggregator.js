var enrichWithCalculations = function (currentCoin) {
    var sumValues = 0

    if (currentCoin.forks && currentCoin.forks.length > 0) {
        currentCoin.forks.map((e, index) => {
            var priceTimesRatio = e.price * e.ratio
            sumValues += priceTimesRatio

            if (!e.price) {
                e.price = 31 / e.ratio
            }
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

            e.priceTimesForkRatio = priceTimesRatio
        })
    }


    currentCoin.priceSumForks = sumValues
}


var mergeData = function (localData, crawledData) {
    var data = {
        fiats: localData.fiats,
        donations: localData.donations,
        languages: localData.languages,
        coins: localData.coins,
        header: localData.header
    }

    // merge fiat crawled and local information
    data.fiats = data.fiats.map((f) => {
        var crawledFiat = crawledData.fiats.find(cf => cf.id === f.id)
        return Object.assign(f, crawledFiat)
    })

    // merge only raw in formation per coin
    data.coins = data.coins.map((d) => {
        var crawledCoin = crawledData.coins.find(cf => cf.id === d.id)
        var mergedCoin = Object.assign(d, crawledCoin)
        return mergedCoin
    })

    // add information also to fork objects
    data.coins = data.coins.map((d) => {
        if (d.forks) {

            d.forks = d.forks.map((ff) => {
                var mergedCoin = data.coins.find(cf => cf.id === ff.id)
                return Object.assign(ff, mergedCoin)
            })
        }

        return d
    })

    for (i = 0; i < 2; i++) {
        // add information
        data.coins = data.coins.map((d) => {
            enrichWithCalculations(d)
            return d
        })

        //add information also to forks
        // add information also to fork objects
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


    return data
}
module.exports = {
    mergeData: mergeData
}
