const data = [
    {
        "id": "ethereum",
        "name": "Ethereum",
        "shortName": "ETH",
        "forks": [
            {
                "id": "ethereumgold",
                "ratio": 1,
                "block": "4730666",
                "date": "15.12.2017"
            },
            {
                "id": "ethereummodification",
                "ratio": 1,
                "block": "4730666",
                "date": "14.12.2017"
            },
            {
                "id": "ethereumfog",
                "ratio": 1,
                "block": "4730660",
                "date": "01.01.2018"

            },
            {
                "id": "etherinc",
                "ratio": 1,
                "block": "5078585",
                "date": "12.02.2018"

            },
            {
                "id": "etherzero",
                "ratio": 1,
                "block": "4936270",
                "date": "20.01.2018"

            },
            {
                "id": "byteether",
                "ratio": 1,
                "block": "478558",
                "date": ""
            }
        ],
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
        "parents": [
        ]
    },
    {
        "id": "byteether",
        "name": "Bytether",
        "shortName": "BTH",
        "links": [
            {
                "type": "website",
                "url": "http://www.bytether.com/"
            }
        ],
        "parents": [
            {
               "id": "ethereum",
                "ratio": 1,
                "block": "478558",
                "date": ""
            }
        ]
    },
    {
        "id": "etherinc",
        "name": "Ether Inc",
        "shortName": "ETI",
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
                "date": "12.02.2018"
            }
        ]
    },
    {
        "id": "etherzero",
        "name": "EtherZero",
        "shortName": "ETZ",
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
                "date": "20.01.2018"
            }
        ]
    },
    {
        "id": "ethereumfog",
        "name": "EthereumFog",
        "shortName": "ETF",
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
                "date": "01.01.2018"
            }
        ]
    },
    {
        "id": "ethereummodification",
        "name": "Ethereum Modification",
        "shortName": "EMO",
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
                "date": "14.12.2017"
            }
        ]
    },
    {
        "id": "ethereumgold",
        "name": "Ethereum Gold",
        "shortName": "ETG",
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
                "date": "15.12.2017"
            }
        ]
    }
]

module.exports = data