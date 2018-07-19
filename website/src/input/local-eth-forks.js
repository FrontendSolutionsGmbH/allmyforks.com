const data = [
    {
        "id": "ethereum",
        "name": "Ethereum",
        "shortName": "ETH",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.ethereum.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/ethereum/"
            }
        ],
        "parents": []
    },
    {
        "id": "etherinc",
        "name": "Ether Inc",
        "shortName": "ETI",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://einc.io/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "5078585",
                "date": "2018-02-12T19:27:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "etherzero",
        "name": "EtherZero",
        "shortName": "ETZ",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://etherzero.org/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "4936270",
                "date": "2018-01-19T18:58:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "ethereumfog",
        "name": "EthereumFog",
        "shortName": "ETF",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://ethereumfog.org/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "4730660",
                "date": "2017-12-14T18:58:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "ethereummodification",
        "name": "Ethereum Modification",
        "shortName": "EMO",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://ethmod.org/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "4730666",
                "date": "2017-12-14T18:58:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "ethereumgold",
        "name": "Ethereum Gold",
        "shortName": "ETG",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://ethergold.gold/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/ethereum-gold/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "4730666",
                "date": "2017-12-14T18:58:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "ethereumclassic",
        "name": "Ethereum Classic",
        "shortName": "ETC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://ethereumclassic.github.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/ethereum-classic/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "1920000",
                "date": "2016-07-20T18:58:45Z",
                "type": "hardfork"
            }
        ]
    },
    {
        "id": "ethereumcrystal",
        "name": "Ethereum Crystal",
        "shortName": "CRT",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://ethergold.gold/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/ethereum-gold/"
            }
        ],
        "parents": [
            {
                "id": "ethereum",
                "ratio": 1,
                "block": "5300000",
                "date": "2018-03-22T18:58:45Z",
                "type": "hardfork"
            }
        ]
    }
]





module.exports = data