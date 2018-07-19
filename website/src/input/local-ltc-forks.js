const data = [
    {
        "id": "litecoin",
        "name": "Litecoin",
        "shortName": "LTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://litecoin.com/"
            },
            {
                "type": "website",
                "url": "https://litecoin.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/litecoin/"
            }
        ],
        "parents": []

    },
    {
        "id": "litecoincash",
        "name": "Litecoin Cash",
        "shortName": "LCC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://litecoinca.sh/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/litecoin-cash/"
            }
        ],
        "parents": [
            {
                "id": "litecoin",
                "ratio": 10,
                "block": "1371111",
                "date": "2018-02-18T19:33:24Z",
            }
        ]
    },
    {
        "id": "superlitecoin",
        "name": "Super Litecoin",
        "shortName": "SLTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.superltc.com/"
            }
        ],
        "parents": [
            {
                "id": "litecoin",
                "ratio": 1,
                "block": "",
                "date": "2017-12-17T19:33:24Z",
            }
        ]
    },
    {
        "id": "litecoinprivate",
        "name": "Litecoin Private",
        "shortName": "LTCP",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.superltc.com/"
            }
        ],
        "parents": [
            {
                "id": "litecoin",
                "ratio": 1,
                "block": "",
                "date": "2018-04-21T19:33:24Z",
            }
        ]
    }
]


module.exports = data