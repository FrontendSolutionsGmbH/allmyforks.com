const data = [
    {
        "id": "ethereum",
        "name": "Ethereum",
        "shortName": "ETH",
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
                "date": "2018-02-12T19:27:45Z"
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
                "date": "2018-01-19T18:58:45Z"
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
                "date": "2017-12-14T18:58:45Z"
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
                "date": "2017-12-14T18:58:45Z"
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
                "date": "2017-12-14T18:58:45Z"
            }
        ]
    }
]

module.exports = data