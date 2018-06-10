/* https://cryptocurrencyfacts.com/a-list-of-upcoming-bitcoin-forks-and-past-forks/
 https://99bitcoins.com/upcoming-bitcoin-forks/

 https://bitinfocharts.com/de/bitcoin%20uranium/
 https://yobit.net/en/trade/BUM/BTC
 a

 */

const data = {

    "pages": {
        "default": {
            "title": "allmyforks.com"
        },
        "imprint": {
            "title": "Imprint"
        },
        "howto": {
            "title": "How to get fork money"
        },
        "whatareforks": {
            "title": "What are Forks"
        },
        "privacy": {
            "title": "Privacy Policy"
        },
        "disclaimer": {
            "title": "Disclaimer"
        },
        "supportus": {
            "title": "Support allmyforks.com"
        },
        "list": {
            "title": "{{coin.shortName}}-Forks {{{fiatWithCurrency coin.priceSumForks fiat language}}}"
        },
        "details": {
            "title": "{{coin.shortName}} fork details"
        }
    },
    "links": [
        {
            "url": "https://www.findmycoins.ninja/",
            "title": "FindMyCoins.Ninja",
            "description": "external_page_findmycoins_ninja"
        },
        {
            "url": " https://forkdrop.io/",
            "title": "Forkdrop.io",
            "description": "external_page_forkdrop_io"
        },
        {
            "url": " https://forks.net/",
            "title": "Forks.net",
            "description": "external_page_forks_net"
        },
        {
            "url": "https://coinmarketcap.com",
            "title": "CoinMarketCap",
            "description": "external_page_coinmarketcap"
        }
    ],
    "fiats": [
        {
            "id": "dollar",
            "name": "Dollar",
            "shortName": "$",

        },
        {
            "id": "euro",
            "name": "Euro",
            "shortName": "€",

        }
    ],
    "donations": [
        {
            "name": "Bitcoin",
            "address": "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
        }
    ],
    "languages": [
        {
            "id": "en",
            "name": "English",
            "shortName": "en",
            "decimalSeparator": ".",
            "messages": require('./intl/en.json')
        },
        {
            "id": "de",
            "name": "Deutsch",
            "shortName": "de",
            "decimalSeparator": ",",
            "messages": require('./intl/de.json')
        }
    ],
    "markets": [
        {
            "id": "okex",
            "name": "OKEx",
            "url": "https://www.okex.com/"
        },
        {
            "id": "binance",
            "name": "Binance",
            "url": "https://www.binance.com/"
        }
    ],
    "coins": [
        {
            "id": "bitcoin",
            "name": "Bitcoin",
            "shortName": "BTC",
            "descriptions": [
                {
                    "text": "Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.",
                    "source": "https://bitcoin.org/"
                },

            ],
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoin.org "
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin"
                }
            ],
            "forks": [
                {
                    "id": "bitcoincash",
                    "ratio": 1,
                    "block": "478558",
                    "date": "2017-08-01T11:16:14Z"
                },
                {
                    "id": "superbitcoin",
                    "ratio": 1,
                    "block": "498888",
                    "date": "2017-12-12T09:29:53Z"
                },
                {
                    "id": "bitcoinx",
                    "ratio": 10000,
                    "price": "0.02",
                    "block": "498888",
                    "date": "2017-12-12T09:29:53Z"
                },
                {
                    "id": "bitcoinlightning",
                    "ratio": 1,
                    "price": "101.13",
                    "block": "499999",
                    "date": "2017-12-18T17:34:47Z"
                },
                {
                    "id": "bitcoingod",
                    "ratio": 1,
                    "price": "44.68",
                    "block": "501225",
                    "date": "2017-12-27T05:55:44Z"
                },
                {
                    "id": "bitcoincashplus",
                    "ratio": 1,
                    "block": "501407",
                    "date": "2017-12-28T09:52:58Z"
                },
                {
                    "id": "bitcoinuranium",
                    "ratio": 1,
                    "block": "~501407",
                    "date": "2017-12-28T09:52:58Z",
                    "dateFormat": "monthAndYear",
                },
                {
                    "id": "bitcoinatom",
                    "ratio": 1,
                    "price": "0.82",
                    "block": "505888",
                    "date": "2018-01-24T13:26:41Z",
                    "dateFormat": "monthAndYear"
                },
                {
                    "id": "bitcoinsilver",
                    "ratio": 1,
                    "block": "TODO",
                    "date": "2017-12-28T09:52:58Z",
                    "dateFormat": "monthAndYear"
                },
                {
                    "id": "unitedbitcoin",
                    "ratio": 1,
                    "price": "10.63",
                    "block": "498777",
                    "date": "12.12.2017"
                },
                {
                    "id": "bitcoindiamond",
                    "ratio": 10,
                    "price": "4.61",
                    "block": "495866",
                    "date": "24.11.2017"
                },
                {
                    "id": "bitcoinoil",
                    "ratio": 10,
                    "block": "498888",
                    "date": "12.12.2017"
                },
                {
                    "id": "bitcoinworld",
                    "ratio": 10000,
                    "block": "499777",
                    "date": "17.12.2017"
                },
                {
                    "id": "bitcoinstake",
                    "ratio": 100,
                    "block": "499999",
                    "date": "19.12.2017"
                },
                {
                    "id": "bitcoinfaith",
                    "ratio": 1,
                    "block": "500000",
                    "date": "19.12.2017"
                },
                {
                    "id": "bitcointop",
                    "ratio": 1,
                    "block": "501118",
                    "date": "26.12.2017"
                },
                {
                    "id": "bitcoinfile",
                    "ratio": 1000,
                    "block": "501225",
                    "date": "27.12.2017"
                },
                {
                    "id": "bitcoinsegwit",
                    "ratio": 1,
                    "price": "0.85",
                    "block": "501451",
                    "date": "28.12.2017"
                },
                {
                    "id": "bitcoinpizza",
                    "ratio": 1,
                    "block": "501888",
                    "date": "01.01.2018"
                },
                {
                    "id": "bitcoinsmart",
                    "ratio": 1,
                    "block": "505050",
                    "date": "21.01.2017"
                },
                {
                    "id": "bitcoinore",
                    "ratio": 1,
                    "block": "501949",
                    "date": "31.12.2017"
                },
                {
                    "id": "bitcoinlite",
                    "ratio": 1,
                    "block": "XXX",
                    "date": "30.01.2018"
                },
                {
                    "id": "bitcoininterest",
                    "ratio": 1,
                    "block": "505083",
                    "date": "22.01.2018"
                },
                {
                    "id": "quantumbitcoin",
                    "ratio": 1,
                    "block": "XXX",
                    "date": "28.01.2018"
                },
                {
                    "id": "bitcoinprivate",
                    "ratio": 1,
                    "price": "18.97",
                    "block": "478558",
                    "date": "01.08.2017"
                },
                {
                    "id": "abitcoin",
                    "ratio": 1,
                    "block": "498888",
                    "date": "-"
                },
                {
                    "id": "bitcoinhot",
                    "ratio": 1,
                    "block": "498848",
                    "date": "-"
                },
                {
                    "id": "bitethereum",
                    "ratio": 3.93946357,
                    "block": "500283",
                    "date": "12.12.2017"
                },
                {
                    "id": "bitcoinrhodium",
                    "ratio": 1,
                    "block": "",
                    "date": "10.01.2018"
                },
                {
                    "id": "bitcoinplatinum",
                    "ratio": 1,
                    "block": "498577",
                    "date": "2017-12-10 14:42:24"
                },
                {
                    "id": "bitcoinclean",
                    "ratio": 1,
                    "block": "518800",
                    "date": "2018-04-18 15:26:13"
                }
            ]
        },
        {
            "id": "bitcoincash",
            "name": "Bitcoin Cash",
            "shortName": "BCH",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoincash.org/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin-cash"
                }
            ],
            "markets": [
                {
                    "id": "okex"
                },
                {
                    "id": "binance"
                }
            ]
        },
        {
            "id": "superbitcoin",
            "name": "Super Bitcoin",
            "shortName": "SBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://supersmartbitcoin.com/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/super-bitcoin"
                }
            ]
        },
        {
            "id": "bitcoinx",
            "name": "BitcoinX",
            "shortName": "BCX",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinx.com/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoinx"
                }
            ]
        },
        {
            "id": "bitcoinlightning",
            "name": "Lightning Bitcoin",
            "shortName": "LBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://lightningbitcoin.io/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/lightning-bitcoin"
                }
            ]
        },
        {
            "id": "bitcoingod",
            "name": "Bitcoin God",
            "shortName": "GOD",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoingod.org/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin-god"
                }
            ]
        },
        {
            "id": "bitcoincashplus",
            "name": "Bitcoin Cash Plus",
            "shortName": "BCP",
            "block": "509695",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoincashplus.org/"
                }
            ]
        },
        {
            "id": "bitcoinuranium",
            "name": "Bitcoin Uranium",
            "shortName": "BUM",
            "links": [
                {
                    "type": "website",
                    "url": "https://github.com/BitcoinUranium"
                }
            ]
        },
        {
            "id": "bitcoinatom",
            "name": "Bitcoin Atom",
            "shortName": "BCA",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinatom.io/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin-atom/"
                }
            ],

        },
        {
            "id": "bitcoinsilver",
            "name": "Bitcoin Silver",
            "shortName": "BTCS",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinsilver.io/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/de/currencies/bitcoin-silver/"
                }
            ]
        },
        {
            "id": "unitedbitcoin",
            "name": "UnitedBitcoin ",
            "shortName": "UB",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.ub.com/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/united-bitcoin/"
                }
            ]
        },
        {
            "id": "bitcoindiamond",
            "name": "Bitcoin Diamond",
            "shortName": "BCD",
            "links": [
                {
                    "type": "website",
                    "url": "http://btcd.io/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin-diamond/"
                }
            ]
        },
        {
            "id": "bitcoinoil",
            "name": "Bitcoin Oil ",
            "shortName": "OBTC",
            "links": []
        },
        {
            "id": "bitcoinworld",
            "name": "Bitcoin World",
            "shortName": "BTW",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.btw.one/"
                }
            ]
        },
        {
            "id": "bitcoinstake",
            "name": "Bitcoin Stake",
            "shortName": "BTCS",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinstake.net/"
                }
            ]
        },
        {
            "id": "bitcoinfaith",
            "name": "Bitcoin Faith",
            "shortName": "BTF",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinfaith.org/"
                }
            ]
        },
        {
            "id": "bitcointop",
            "name": "Bitcoin Top",
            "shortName": "BTT",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcointop.org/"
                }
            ]
        },
        {
            "id": "bitcoinfile",
            "name": "Bitcoin File",
            "shortName": "BIFI",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoinfile.org"
                }
            ]
        },
        {
            "id": "bitcoinsegwit",
            "name": "Bitcoin Segwit2X X11",
            "shortName": "B2X",
            "links": [
                {
                    "type": "website",
                    "url": "https://b2x-segwit.io/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/segwit2x/"
                }
            ]
        },
        {
            "id": "bitcoinpizza",
            "name": "Bitcoin Pizza",
            "shortName": "BPA",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.p.top/"
                }
            ]
        },
        {
            "id": "bitcoinsmart",
            "name": "Bitcoin Smart",
            "shortName": "BCS",
            "status": "pending",
            "links": [
                {
                    "type": "website",
                    "url": "http://bcs.info/"
                }
            ]
        },
        {
            "id": "bitcoinore",
            "name": "Bitcoin Ore",
            "shortName": "BCO",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinore.org/"
                }
            ]
        },
        {
            "id": "bitcoinlite",
            "name": "Bitcoin LITE",
            "shortName": "BTCL",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinlite.us/"
                }
            ]
        },
        {
            "id": "bitcoininterest",
            "name": "Bitcoin Interest",
            "shortName": "BCI",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoininterest.io/"
                }
            ]
        },
        {
            "id": "quantumbitcoin",
            "name": "Quantum Bitcoin",
            "shortName": "QBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.quantumbitcoin.top/"
                }
            ]
        },
        {
            "id": "bitcoinprivate",
            "name": "Bitcoin Private",
            "shortName": "BTCP",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinpvt.org/"
                },
                {
                    "type": "coinmarketcap",
                    "url": "https://coinmarketcap.com/currencies/bitcoin-private/"
                }
            ]
        },
        {
            "id": "abitcoin",
            "name": "ABitcoin ",
            "shortName": "ABTC",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.abitcoin.one/"
                }
            ]
        },
        {
            "id": "bitcoinhot",
            "name": "Bitcoin Hot ",
            "shortName": "BTH",
            "links": [
                {
                    "type": "website",
                    "url": "https://bithot.org/"
                }
            ]
        },
        {
            "id": "bitethereum",
            "name": "BitEthereum",
            "shortName": "BITE",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitethereum.io/"
                }
            ]
        },
        {
            "id": "bitcoinrhodium",
            "name": "Bitcoin Rhodium",
            "shortName": "BTR",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoinrh.org/"
                }
            ]
        },
        {
            "id": "bitcoinplatinum",
            "name": "Bitcoin Platinum",
            "scam": true,
            "shortName": "BTP",
            "links": [
                {
                    "type": "news",
                    "url": "https://cointelegraph.com/news/bitcoin-platinum-created-by-south-korean-teenager-as-a-scam-local-market-erupts"
                }
            ]
        },
        {
            "id": "bitcoinclean",
            "name": "BitcoinClean",
            "shortName": "BCL",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoinclean.org/"
                }
            ]
        },
        {
            "id": "ethereum",
            "name": "Ethereum",
            "shortName": "ETH",
            "forks": [
                {
                    "id": "ethereumgold",
                    "ratio": 1,
                    "block": "4730666",
                    "date": "15.12.2017",

                },
                {
                    "id": "ethereummodification",
                    "ratio": 1,
                    "block": "4730666",
                    "date": "14.12.2017",

                },
                {
                    "id": "ethereumfog",
                    "ratio": 1,
                    "block": "4730660",
                    "date": "01.01.2018",

                },
                {
                    "id": "etherinc",
                    "ratio": 1,
                    "block": "5078585",
                    "date": "12.02.2018",

                },
                {
                    "id": "etherzero",
                    "ratio": 1,
                    "block": "4936270",
                    "date": "20.01.2018",

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

        },
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
            ]
        }
    ]
}

/*
 forks.net

 ->

 BitcoinBoy BCB 501888 31.12.2017 R:100
 Bitcoin Zero BZX 30.09.2018 R:1  "status": "unforked",
 ClassicBitcoin CBTC 516095 R:10000  "status": "pending",
 BitVote BTV 505050  21.01.2018 R:1
 Bitcoin Smart 505050 21.01.2018 R:100  "status": "pending",
 Bitcoin All BTA R:1
 Quantum Bitcoin 25.12.2017 501000 R:1
 Bitcoin New BTN 25.12.2017 501000 R:1
 Bitcoin Nano BTN 501888 R:1000
 Bitcore BTX  R:0.5
 Bytether BTH 01.08.2017 478558 R:1
 Bitcoin Clashic 01.08.2017 BCHC / B  478558 R:1

 findmycoins.ninja

 Bitcoin pay BTP 15.12.2017 499345 R:10
 Bitclassic Coin BICC 18.12.2017 499888 R:1
 Bitcoin Eco  BEC R:10000 18.12.2017 50000  "status": "pending",
 Fast Bitcoin FBTC 501225 R:1
 Bitcoin Community BTSQ R:10000 506066

 Recherche

 Litecoin Ultra -> CoinMarketCap -> Bitcoin Fork

 asd
 */


module.exports = data