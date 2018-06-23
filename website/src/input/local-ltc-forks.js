const data = [
    {
        "id": "litecoin",
        "name": "Litecoin",
        "shortName": "LTC",
        "forks": [
            {
                "id": "superlitecoin",
                "ratio": 1,
                "block": "",
                "date": "18.02.2018",

            },
            {
                "id": "litecoincash",
                "ratio": 1,
                "block": "1371111",
                "date": "17.01.2018",

            }
        ],
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
         "parents": [
        ]

    },
    {
        "id": "litecoincash",
        "name": "Litecoin Cash",
        "shortName": "LCC",
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
               "ratio": 1,
                "block": "1371111",
                "date": "17.01.2018",
            }
        ]
    },
    {
        "id": "superlitecoin",
        "name": "Super Litecoin",
        "shortName": "SLTC",
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
                "date": "18.02.2018",    
            }
        ]
    }
]


module.exports = data