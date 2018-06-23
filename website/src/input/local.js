/* https://cryptocurrencyfacts.com/a-list-of-upcoming-bitcoin-forks-and-past-forks/
 https://99bitcoins.com/upcoming-bitcoin-forks/

 https://bitinfocharts.com/de/bitcoin%20uranium/
 https://yobit.net/en/trade/BUM/BTC
 a

 */

const data = {

    "pages": {
        "default": {
            "title": "allmyforks.com",
            "description": "Cryptocurrency Fork Overview"
        },
        "imprint": {
            "title": "Imprint",
            "description": "Imprint"
        },
        "howto": {
            "title": "How to claim my forked coins",
            "description": "How to claim my forked coins"
        },
        "whatareforks": {
            "title": "What is a fork",
            "description": "What is a fork and what are the differences between soft and hard forks"
        },
        "privacy": {
            "title": "Privacy Policy",
            "description": "AllMyForks Privacy Policy"
        },
        "disclaimer": {
            "title": "Disclaimer",
            "description": "AllMyForks Disclaimer"
        },
        "supportus": {
            "title": "Support allmyforks.com",
            "description": "Support allmyforks.com"
        },
        "list": {
            "title": "{{coin.shortName}}-Forks {{{fiatWithCurrency coin.priceSumForks fiat language}}}",
            "description": "Cryptocurrency Fork rankings, charts, and more"
        },
        "details": {
            "title": "{{coin.shortName}} fork details",
            "description": "Claim {{coin.shortName}} forked coins"
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
                }

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
                    "date": "2017-12-11T17:19:12Z"
                },
                {
                    "id": "bitcoindiamond",
                    "ratio": 10,
                    "price": "4.61",
                    "block": "495866",
                    "date": "2017-11-24T08:20:12Z"
                },
                {
                    "id": "bitcoinoil",
                    "ratio": 10,
                    "block": "498888",
                    "date": "2017-12-12T09:29:53Z"
                },
                {
                    "id": "bitcoinworld",
                    "ratio": 10000,
                    "block": "499777",
                    "date": "2017-12-17T11:11:17Z"
                },
                {
                    "id": "bitcoinstake",
                    "ratio": 100,
                    "block": "499999",
                    "date": "2017-12-18T17:34:47Z"
                },
                {
                    "id": "bitcoinfaith",
                    "ratio": 1,
                    "block": "500000",
                    "date": "2017-12-18T17:35:25Z"
                },
                {
                    "id": "bitcointop",
                    "ratio": 1,
                    "block": "501118",
                    "date": "2017-12-26T12:50:32Z"
                },
                {
                    "id": "bitcoinfile",
                    "ratio": 1000,
                    "block": "501225",
                    "date": "2017-12-27T05:55:44Z"
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
                },
                {
                    "id": "bitcoinboy",
                    "ratio": 1,
                    "block": "501888",
                    "date": ""
                },
                {
                    "id": "bitcoinzero",
                    "ratio": 1,
                    "block": "",
                    "status": "unforked",
                    "date": "30.09.2018"
                },
                {
                    "id": "classicbitcoin",
                    "ratio": 10000,
                    "block": "516095",
                    "date": ""
                },
                {
                    "id": "bitvote",
                    "ratio": 1,
                    "block": "505050",
                    "date": ""
                },
                {
                    "id": "bitcoinsmart",
                    "ratio": 100,
                    "block": "505050",
                    "date": "",
                    "status": "pending"
                },
                {
                    "id": "bitcoinall",
                    "ratio": 1,
                    "block": "",
                    "date": ""
                },
                {
                    "id": "quantumbitcoin",
                    "ratio": 1,
                    "block": "501000",
                    "date": ""
                },
                {
                    "id": "bitcoinnew",
                    "ratio": 1,
                    "block": "501000",
                    "date": ""
                },
                {
                    "id": "bitcoinnano",
                    "ratio": 1,
                    "block": "501888",
                    "date": ""

                },
                {
                    "id": "bitcore",
                    "ratio": 0.5,
                    "block": "",
                    "date": ""
                },

                {
                    "id": "bitcoinclashic",
                    "ratio": 1,
                    "block": "478558",
                    "date": ""
                },
                {
                    "id": "bitcoinpay",
                    "ratio": 1,
                    "block": "499345",
                    "date": ""
                },
                {
                    "id": "bitclassic",
                    "ratio": 1,
                    "block": "499888",
                    "date": ""
                },
                {
                    "id": "bitcoineco",
                    "ratio": 10000,
                    "status": "pending",
                    "block": "",
                    "date": ""
                },
                {
                    "id": "fastbitcoin",
                    "ratio": 1,
                    "block": "501225",
                    "date": ""
                },
                {
                    "id": "bitcoincommunity",
                    "ratio": 1,
                    "block": "10000",
                    "date": ""
                },

                {
                    "id": "clam"
                },
                {
                    "id": "bitcoincore"
                },
                {
                    "id": "bitcoinatcbc"
                },
                {
                    "id": "bitcoincandy"
                },
                {
                    "id": "bitcoinwonder"
                },
                {
                    "id": "newbitcoin"
                },
                {
                    "id": "bigbitcoin"
                },
                {
                    "id": "xenon"
                },
                {
                    "id": "bitcoinhush"
                },
                {
                    "id": "worldbitcoin"
                },
                {
                    "id": "bitcointwo"
                },
                {
                    "id": "bitcoinprime"
                },
                {
                    "id": "anonymousbitcoin"
                },
                {
                    "id": "bitcoinparallel"
                },
                {
                    "id": "dalilcoin"
                },
                {
                    "id": "bitcoincloud"
                },
                {
                    "id": "foxbtc"
                },
                {
                    "id": "microbitcoin"
                },
                {
                    "id": "bitcoinair"
                },
                {
                    "id": "bitcoinhex"
                },
                {
                    "id": "bitcoin_lambo"
                },
                {
                    "id": "bitcoinclass"
                },
                {
                    "id": "bitcoinpro"
                },
                {
                    "id": "qeditas"
                },
                {
                    "id": "bitcoinholocaust"
                },
                {
                    "id": "bitcointi"
                },
                {
                    "id": "bitcoindollar"
                },
                {
                    "id": "smartbitcoin"
                },
                {
                    "id": "bitcoindao"
                },
                {
                    "id": "bitcoinblvck"
                },
                {
                    "id": "bitcoincoral"
                },
                {
                    "id": "bitcoinsudu"
                },
                {
                    "id": "bitcoinking"
                },
                {
                    "id": "bitcoinx2"
                },
                {
                    "id": "bitcoinmetal"
                },
                {
                    "id": "bitclassiccoin"
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
            ]

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
            "id": "bitcoinboy",
            "name": "BitCoinBoy",
            "shortName": "BCB",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinboy.org/"
                }
            ]
        },
        {
            "id": "bitcoinzero",
            "name": "Bitcoin Zero",
            "shortName": "BZX",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.hexxcoin.net/"
                }
            ]
        },
        {
            "id": "classicbitcoin",
            "name": "ClassicBitcoin",
            "shortName": "CBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitclassic.info/"
                }
            ]
        },
        {
            "id": "bitvote",
            "name": "BitVote",
            "shortName": "BTV",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitvote.one/"
                }
            ]
        },
        {
            "id": "bitcoinsmart",
            "name": "Bitcoin Smart",
            "shortName": "BCS",
            "links": [
                {
                    "type": "website",
                    "url": "http://bcs.info/"
                }
            ]
        },
        {
            "id": "bitcoinall",
            "name": "Bitcoin All",
            "shortName": "BTA",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinall.org/"
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
            "id": "bitcoinnew",
            "name": "Bitcoin New",
            "shortName": "BTN",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.btn.org/"
                }
            ]
        },
        {
            "id": "bitcoinnano",
            "name": "Bitcoin Nano",
            "shortName": "BTN",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.btcnano.org/"
                }
            ]
        },
        {
            "id": "bitcore",
            "name": "Bitcore",
            "shortName": "BTX",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcore.cc/"
                }
            ]
        },

        {
            "id": "bitcoinclashic",
            "name": "Bitcoin Clashic",
            "shortName": "BCHC",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinclashic.org/"
                }
            ]
        },
        {
            "id": "bitcoinpay",
            "name": "Bitcoin Pay",
            "shortName": "BTP",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.btceasypay.com/"
                }
            ]
        },
        {
            "id": "bitclassic",
            "name": "Bitclassic",
            "shortName": "B2C",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitclassic.org/"
                }
            ]
        },
        {
            "id": "bitcoineco",
            "name": "Bitcoin Eco",
            "shortName": "BEC",
            "links": [
                {
                    "type": "website",
                    "url": "http://biteco.io/"
                }
            ]
        },
        {
            "id": "fastbitcoin",
            "name": "Fast Bitcoin",
            "shortName": "FBTC",
            "links": [
                {
                    "type": "website",
                    "url": "https://fbtc.pro/"
                }
            ]
        },
        {
            "id": "bitcoincommunity",
            "name": "Bitcoin Community",
            "shortName": "BTSQ",
            "links": [
                {
                    "type": "website",
                    "url": "http://btsq.top/"
                }
            ]
        },

        {
            "id": "clam",
            "name": "Clam",
            "shortName": "CLAM",
            "links": [
                {
                    "type": "website",
                    "url": "https://clamcoin.org/"
                }
            ],
            "ratio": 1,
            "block": "300377",
            "date": ""
        },
        {
            "id": "bitcoincore",
            "name": "Bitcoin Core",
            "shortName": "BCC",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcore.cc/"
                }
            ],
            "ratio": 1,
            "block": "300377",
            "date": ""
        },
        {
            "id": "bitcoinatcbc",
            "name": "Bitcoin@CBC",
            "shortName": "BCBC",
            "links": [
                {
                    "type": "website",
                    "url": "https://btw.one/"
                }
            ],
            "ratio": 1,
            "block": "498754",
            "date": ""
        },
        {
            "id": "bitcoincandy",
            "name": "Bitcoin Candy",
            "shortName": "CDY",
            "links": [
                {
                    "type": "website",
                    "url": "http://cdy.one/index_EN.html"
                }
            ],
            "ratio": 1,
            "block": "512666",
            "date": ""
        },
        {
            "id": "bitcoinwonder",
            "name": "Bitcoin Wonder",
            "shortName": "BCW",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinwonder.io/"
                }
            ],
            "ratio": 1,
            "block": "500000",
            "date": ""
        },
        {
            "id": "newbitcoin",
            "name": "New Bitcoin",
            "shortName": "NBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.newbitcoin.org/index_en.html"
                }
            ],
            "ratio": 1,
            "block": "501225",
            "date": ""
        },
        {
            "id": "bigbitcoin",
            "name": "Big Bitcoin",
            "shortName": "BBC",
            "links": [
                {
                    "type": "website",
                    "url": "http://bigbitcoins.org/"
                }
            ],
            "ratio": 1,
            "block": "508888",
            "date": ""
        },
        {
            "id": "xenon",
            "name": "Xenon",
            "shortName": "XNN",
            "links": [
                {
                    "type": "website",
                    "url": "http://xenon.network/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoinhush",
            "name": "Bitcoin Hush",
            "shortName": "BTCH",
            "links": [
                {
                    "type": "website",
                    "url": "http://btchush.org/"
                }
            ],
            "ratio": 1,
            "block": "507089",
            "date": ""
        },
        {
            "id": "worldbitcoin",
            "name": "World Bitcoin",
            "shortName": "WBTC",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.wbtcteam.org/"
                }
            ],
            "ratio": 1,
            "block": "503888",
            "date": ""
        },
        {
            "id": "bitcointwo",
            "name": "Bitcoin 2",
            "shortName": "BTC2",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitc2.org/"
                }
            ],
            "ratio": 1,
            "block": "507850",
            "date": ""
        },
        {
            "id": "bitcoinprime",
            "name": "Bitcoin Prime",
            "shortName": "BPR",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinprime.org/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "anonymousbitcoin",
            "name": "Anonymous Bitcoin",
            "shortName": "ANON",
            "links": [
                {
                    "type": "website",
                    "url": "http://anonymousbitcoin.io/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoinparallel",
            "name": "Bitcoin Parallel",
            "shortName": "BCP",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoinparallel.org/"
                }
            ],
            "ratio": 1,
            "block": "507000",
            "date": ""
        },
        {
            "id": "dalilcoin",
            "name": "Dalilcoin",
            "shortName": "DLC",
            "links": [
                {
                    "type": "website",
                    "url": ""
                }
            ],
            "ratio": 1,
            "block": "350000",
            "date": ""
        },
        {
            "id": "bitcoincloud",
            "name": "Bitcoin Cloud",
            "shortName": "BCL",
            "links": [
                {
                    "type": "website",
                    "url": "https://github.com/aliibrahim80/dalilcoin"
                }
            ],
            "ratio": 1,
            "block": "510048",
            "date": ""
        },
        {
            "id": "foxbtc",
            "name": "Fox BTC",
            "shortName": "FOXBTC",
            "links": [
                {
                    "type": "website",
                    "url": "https://foxbtc.io/"
                }
            ],
            "ratio": 1,
            "block": "520419",
            "date": ""
        },
        {
            "id": "microbitcoin",
            "name": "MicroBitcoin",
            "shortName": "MBC",
            "links": [
                {
                    "type": "website",
                    "url": "https://microbitcoin.org/"
                }
            ],
            "ratio": 1,
            "block": "525000",
            "date": ""
        },
        {
            "id": "bitcoinair",
            "name": "Bitcoin Air",
            "shortName": "AIR",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinair.org/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoinhex",
            "name": "BitcoinHEX",
            "shortName": "BHX",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinhex.com/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoin_lambo",
            "name": "Bitcoin Lambo",
            "shortName": "BTL",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinlambo.tech/"
                }
            ],
            "ratio": 1,
            "block": "515350",
            "date": ""
        },
        {
            "id": "bitcoinclass",
            "name": "Bitcoin Class",
            "shortName": "BCS",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinclass.one/"
                }
            ],
            "note": "BCH Fork",
            "ratio": 1,
            "block": "528000",
            "date": ""
        },
        {
            "id": "bitcoinpro",
            "name": "Bitcoin Pro",
            "shortName": "BTP",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoinpro.team/"
                }
            ],
            "ratio": 1,
            "block": "506984",
            "date": ""
        },
        {
            "id": "qeditas",
            "name": "Qeditas",
            "shortName": "QED",
            "links": [
                {
                    "type": "website",
                    "url": "http://qeditas.org/"
                }
            ],
            "ratio": 1,
            "block": "350000",
            "date": ""
        },
        {
            "id": "bitcoinholocaust",
            "name": "Bitcoin Holocaust",
            "shortName": "BTHOL",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.bitcoinholocaust.org/"
                }
            ],
            "ratio": 1,
            "block": "501488",
            "date": ""
        },
        {
            "id": "bitcointi",
            "name": "BitcoinTi",
            "shortName": "BTCTI",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.btcti.org/"
                }
            ],
            "ratio": 1,
            "block": "512480",
            "date": ""
        },
        {
            "id": "bitcoindollar",
            "name": "Bitcoin Dollar",
            "shortName": "BTD",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoindollar.io"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "smartbitcoin",
            "name": "Smart Bitcoin",
            "shortName": "SBC",
            "links": [
                {
                    "type": "website",
                    "url": "http://www.smartbitcoin.one/"
                }
            ],
            "ratio": 1,
            "block": "520000",
            "date": ""
        },
        {
            "id": "bitcoindao",
            "name": "Bitcoin Dao",
            "shortName": "BTD",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcointalk.org/index.php?topic=3585668"
                }
            ],
            "ratio": 1,
            "block": "531650",
            "date": ""
        },
        {
            "id": "bitcoinblvck",
            "name": "Bitcoin Blvck",
            "shortName": "BTCV",
            "links": [
                {
                    "type": "website",
                    "url": "http://btcblvck.io/"
                }
            ],
            "ratio": 1,
            "block": "507777",
            "date": ""
        },
        {
            "id": "bitcoincoral",
            "name": "Bitcoin Coral",
            "shortName": "BTCO",
            "links": [
                {
                    "type": "website",
                    "url": "https://bitcoincoral.com/"
                }
            ],
            "ratio": 1,
            "block": "491407",
            "date": ""
        },
        {
            "id": "bitcoinsudu",
            "name": "Bitcoin Sudu",
            "shortName": "SUDU",
            "links": [
                {
                    "type": "website",
                    "url": "http://bitcoinsudu.com/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoinking",
            "name": "Bitcoin King",
            "shortName": "BCK",
            "links": [
                {
                    "type": "website",
                    "url": "https://btcking.org/"
                }
            ],
            "ratio": 1,
            "block": "499999",
            "date": ""
        },
        {
            "id": "bitcoinx2",
            "name": "Bitcoinx2",
            "shortName": "BTCX2",
            "links": [
                {
                    "type": "website",
                    "url": "https://btcx2.com/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitcoinmetal",
            "name": "Bitcoin Metal",
            "shortName": "BTCM",
            "links": [
                {
                    "type": "website",
                    "url": "https://www.bitcoinmetal.org/"
                }
            ],
            "ratio": 1,
            "block": "",
            "date": ""
        },
        {
            "id": "bitclassiccoin",
            "name": "BitClassic Coin",
            "shortName": "BICC",
            "links": [
                {
                    "type": "website",
                    "url": "http://bicc.io/"
                }
            ],
            "ratio": 1,
            "block": "498888",
            "date": ""
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
            ]

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