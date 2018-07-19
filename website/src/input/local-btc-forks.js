const data = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "shortName": "BTC",
        "isCrawlable": true,
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
        "parents": []
    },
    {
        "id": "bitcoincash",
        "name": "Bitcoin Cash",
        "shortName": "BCH",
        "isCrawlable": true,
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "type": "hardfork",
                "date": "2017-08-01T11:16:14Z"
            }
        ]
    },
    {
        "id": "bitcoingold",
        "name": "Bitcoin Gold",
        "shortName": "BTG",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoingold.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoin-gold/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "491407",
                "type": "hardfork",
                "date": "2017-10-23T23:20:39Z"
            }
        ]
    },
    {
        "id": "superbitcoin",
        "name": "Super Bitcoin",
        "shortName": "SBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://supersmartbitcoin.com/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/super-bitcoin"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "type": "hardfork",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinx",
        "name": "BitcoinX",
        "shortName": "BCX",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinx.com/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoinx"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "498888",
                "type": "hardfork",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinlightning",
        "name": "Lightning Bitcoin",
        "shortName": "LBTCX",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://lightningbitcoin.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/lightning-bitcoin"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499999",
                "type": "hardfork",
                "date": "2017-12-18T17:34:47Z"
            }
        ]
    },
    {
        "id": "bitcoingod",
        "name": "Bitcoin God",
        "shortName": "GOD",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoingod.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoin-god"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "type": "hardfork",
                "date": "2017-12-27T05:55:44Z"
            }
        ]
    },
    {
        "id": "bitcoincashplus",
        "name": "Bitcoin Cash Plus",
        "shortName": "BCP",
        "isCrawlable": true,
        "block": "509695",
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoincashplus.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501407",
                "type": "hardfork",
                "date": "2017-12-28T09:52:58Z"
            }
        ]
    },
    {
        "id": "bitcoinuranium",
        "name": "Bitcoin Uranium",
        "shortName": "BUM",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://github.com/BitcoinUranium"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501407",
                "type": "hardfork",
                "date": "2017-12-28T09:52:58Z",
                "dateFormat": "monthAndYear"
            }
        ]
    },
    {
        "id": "bitcoinatom",
        "name": "Bitcoin Atom",
        "shortName": "BCA",
        "isCrawlable": true,
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505888",
                "type": "hardfork",
                "date": "2018-01-24T13:26:41Z"
            }
        ]
    },
    {
        "id": "bitcoinsilver",
        "name": "Bitcoin Silver",
        "shortName": "BTCS",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoinsilver.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/de/currencies/bitcoin-silver/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "hardfork",
                "date": "2017-12-28T09:52:58Z",
                "dateFormat": "monthAndYear"
            }
        ]
    },
    {
        "id": "unitedbitcoin",
        "name": "UnitedBitcoin ",
        "shortName": "UB",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.ub.com/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/united-bitcoin/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498777",
                "type": "airdrop",
                "date": "2017-12-11T17:19:12Z"
            }
        ]
    },
    {
        "id": "bitcoindiamond",
        "name": "Bitcoin Diamond",
        "shortName": "BCD",
        "isCrawlable": true,
        "notes": "check price of binance",
        "links": [
            {
                "type": "website",
                "url": "http://btcd.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoin-diamond/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10,
                "block": "495866",
                "type": "hardfork",
                "date": "2017-11-24T08:20:12Z"
            }
        ]
    },
    {
        "id": "bitcoinoil",
        "name": "Bitcoin Oil ",
        "shortName": "OBTC",
        "isCrawlable": true,
        "links": [],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10,
                "block": "498888",
                "type": "hardfork",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinworld",
        "name": "Bitcoin World",
        "shortName": "BTW",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "BitWhite"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "https://www.btw.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "499777",
                "type": "hardfork",
                "date": "2017-12-17T11:11:17Z"
            }
        ]
    },
    {
        "id": "bitcoinstake",
        "name": "Bitcoin Stake",
        "shortName": "BTCS",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "Bitcoin Scrypt"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "https://bitcoinstake.net/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 100,
                "block": "499999",
                "type": "hardfork",
                "date": "2017-12-18T17:34:47Z"
            }
        ]
    },
    {
        "id": "bitcoinfaith",
        "name": "Bitcoin Faith",
        "shortName": "BTF",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinfaith.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "500000",
                "type": "hardfork",
                "date": "2017-12-18T17:35:25Z"
            }
        ]
    },
    {
        "id": "bitcointop",
        "name": "Bitcoin Top",
        "shortName": "BTT",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcointop.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501118",
                "type": "hardfork",
                "date": "2017-12-26T12:50:32Z"
            }
        ]
    },
    {
        "id": "bitcoinfile",
        "name": "Bitcoin File",
        "shortName": "BIFI",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoinfile.org"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1000,
                "block": "501225",
                "type": "hardfork",
                "date": "2017-12-27T05:55:44Z"
            }
        ]
    },
    {
        "id": "bitcoinsegwit",
        "name": "Bitcoin Segwit2X X11",
        "shortName": "B2X",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://b2x-segwit.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/segwit2x/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501451",
                "type": "hardfork",
                "date": "2017-12-28T17:02:33Z"
            }
        ]
    },
    {
        "id": "bitcoinpizza",
        "name": "Bitcoin Pizza",
        "shortName": "BPA",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.p.top/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "type": "hardfork",
                "date": "2017-12-31T11:32:38Z"
            }
        ]
    },
    {
        "id": "bitcoinsmart",
        "name": "Bitcoin Smart",
        "shortName": "BCS",
        "isCrawlable": true,
        "status": "pending",
        "links": [
            {
                "type": "website",
                "url": "http://bcs.info/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505050",
                "type": "hardfork",
                "date": "2018-01-19T20:58:53Z"
            }
        ]
    },
    {
        "id": "bitcoinore",
        "name": "Bitcoin Ore",
        "shortName": "BCO",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "BridgeCoin"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinore.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501949",
                "type": "hardfork",
                "date": "2017-12-31T21:53:08Z"
            }
        ]
    },
    {
        "id": "bitcoinlite",
        "name": "Bitcoin LITE",
        "shortName": "BTCL",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinlite.us/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoininterest",
        "name": "Bitcoin Interest",
        "shortName": "BCI",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoininterest.io/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoin-interest/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505083",
                "type": "hardfork",
                "date": "2018-01-20T01:04:45Z"
            }
        ]
    },
    {
        "id": "quantumbitcoin",
        "name": "Quantum Bitcoin",
        "shortName": "QBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.quantumbitcoin.top/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501368",
                "type": "hardfork",
                "date": "2017-12-28T03:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinprivate",
        "name": "Bitcoin Private",
        "shortName": "BTCP",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoinpvt.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcoin-private/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "type": "airdrop_passiveparticipation",
                "date": "2017-08-01T11:16:14Z"
            }
        ]
    },
    {
        "id": "abitcoin",
        "name": "ABitcoin ",
        "shortName": "ABTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.abitcoin.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "type": "hardfork",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinhot",
        "name": "Bitcoin Hot ",
        "shortName": "BTH",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bithot.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498848",
                "type": "airdrop",
                "date": "2017-12-12T03:44:12Z"
            }
        ]
    },
    {
        "id": "bitethereum",
        "name": "BitEthereum",
        "shortName": "BITE",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitethereum.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 3.93946357,
                "block": "500283",
                "type": "hardfork",
                "date": "2017-12-20T14:57:32Z"
            }
        ]
    },
    {
        "id": "bitcoinrhodium",
        "name": "Bitcoin Rhodium",
        "shortName": "BTR",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoinrh.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinplatinum",
        "name": "Bitcoin Platinum",
        "scam": true,
        "shortName": "BTP",
        "isCrawlable": true,
        "links": [
            {
                "type": "news",
                "url": "https://cointelegraph.com/news/bitcoin-platinum-created-by-south-korean-teenager-as-a-scam-local-market-erupts"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498577",
                "type": "hardfork",
                "date": "2017-12-10T13:42:24Z"
            }
        ]
    },
    {
        "id": "bitcoinclean",
        "name": "BitcoinClean",
        "shortName": "BCL",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoinclean.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "518800",
                "type": "hardfork",
                "date": "2018-04-18T13:26:13Z"
            }
        ]
    },
    {
        "id": "bitcoinboy",
        "name": "BitCoinBoy",
        "shortName": "BCB",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinboy.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "type": "hardfork",
                "date": "2017-12-31T11:32:38Z"
            }
        ]
    },
    {
        "id": "bitcoinzero",
        "name": "Bitcoin Zero",
        "shortName": "BZX",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.hexxcoin.net/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "TBD",
                "status": "unforked",
                "type": "airdrop",
                "date": "2018-08-31T05:01:43Z"
            }
        ]
    },
    {
        "id": "classicbitcoin",
        "name": "ClassicBitcoin",
        "shortName": "CBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitclassic.info/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "516095",
                "type": "airdrop",
                "date": "2018-04-01T05:01:43Z"
            }
        ]
    },
    {
        "id": "bitvote",
        "name": "BitVote",
        "shortName": "BTV",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitvote.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505050",
                "type": "hardfork",
                "date": "2018-01-19T20:58:53Z"
            }
        ]
    },
    {
        "id": "bitcoinsmart",
        "name": "Bitcoin Smart",
        "shortName": "BCS",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bcs.info/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 100,
                "block": "505050",
                "type": "hardfork",
                "date": "2018-01-19T20:58:53Z",
                "status": "pending"
            }
        ]
    },
    {
        "id": "bitcoinall",
        "name": "Bitcoin All",
        "shortName": "BTA",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "Allion"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinall.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop_passiveparticipation",
                "date": ""
            }
        ]
    },
    {
        "id": "quantumbitcoin",
        "name": "Quantum Bitcoin",
        "shortName": "QBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.quantumbitcoin.top/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501368",
                "type": "hardfork",
                "date": "2017-12-28T03:29:53Z"
            }
        ]
    },
    {
        "id": "bitcoinnew",
        "name": "Bitcoin New",
        "shortName": "BTN",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.btn.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501000",
                "type": "hardfork",
                "date": "2017-12-25T16:42:45Z"
            }
        ]
    },
    {
        "id": "bitcoinnano",
        "name": "Bitcoin Nano",
        "shortName": "BTN",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.btcnano.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "type": "hardfork",
                "date": "2017-12-31T11:32:38Z"
            }
        ]
    },
    {
        "id": "bitcore",
        "name": "Bitcore",
        "shortName": "BTX",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcore.cc/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/bitcore"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 0.5,
                "block": "",
                "type": "airdrop_passiveparticipation",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinclashic",
        "name": "Bitcoin Clashic",
        "shortName": "BCHC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinclashic.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "type": "hardfork",
                "date": "2017-08-01T11:16:14Z"
            }
        ]
    },
    {
        "id": "bitcoinpay",
        "name": "Bitcoin Pay",
        "shortName": "BTP",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.btceasypay.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499345",
                "type": "hardfork",
                "date": "2017-12-14T23:15:00Z"
            }
        ]
    },
    {
        "id": "bitclassic",
        "name": "Bitclassic",
        "shortName": "B2C",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitclassic.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499888",
                "type": "hardfork",
                "date": "2017-12-18T01:55:58Z"
            }
        ]
    },
    {
        "id": "bitcoineco",
        "name": "Bitcoin Eco",
        "shortName": "BEC",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "BeaoCoin"
            },
            {
                "name": "BeautyChain"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://biteco.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "status": "pending",
                "block": "",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "fastbitcoin",
        "name": "Fast Bitcoin",
        "shortName": "FBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://fbtc.pro/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "type": "hardfork",
                "date": "2017-12-27T05:55:44Z"
            }
        ]
    },
    {
        "id": "bitcoincommunity",
        "name": "Bitcoin Community",
        "shortName": "BTSQ",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://btsq.top/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "506066",
                "type": "hardfork",
                "date": "2018-01-25T14:20:45Z"
            }
        ]
    },
    {
        "id": "clam",
        "name": "Clam",
        "shortName": "CLAM",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://clamcoin.org/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/clams"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "300377",
                "type": "airdrop_passiveparticipation",
                "date": "2014-05-12T10:48:17Z"
            }
        ]
    },
    {
        "id": "bitcoincore",
        "name": "Bitcoin Core",
        "shortName": "BCC",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "Bitcoin Cash"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "https://bitcore.cc/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "576698",
                "type": "hardfork",
                "date": "2014-05-12T10:48:17Z"
            }
        ]
    },
    {
        "id": "bitcoinatcbc",
        "name": "Bitcoin@CBC",
        "shortName": "BCBC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://btw.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498754",
                "type": "hardfork",
                "date": "2017-12-11T14:07:40Z"
            }
        ]
    },
    {
        "id": "bitcoincandy",
        "name": "Bitcoin Candy",
        "shortName": "CDY",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://cdy.one/index_EN.html"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "512666",
                "type": "hardfork",
                "date": "2018-03-08T23:55:01Z"
            }
        ]
    },
    {
        "id": "bitcoinwonder",
        "name": "Bitcoin Wonder",
        "shortName": "BCW",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinwonder.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "500000",
                "type": "airdrop_passiveparticipation",
                "date": "2017-12-18T17:35:25Z"
            }
        ]
    },
    {
        "id": "newbitcoin",
        "name": "New Bitcoin",
        "shortName": "NBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.newbitcoin.org/index_en.html"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "type": "hardfork",
                "date": "2017-12-27T05:55:44Z"
            }
        ]
    },
    {
        "id": "bigbitcoin",
        "name": "Big Bitcoin",
        "shortName": "BBC",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "TraDove B2BCoin"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://bigbitcoins.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "508888",
                "type": "hardfork",
                "date": "2018-02-12T21:26:22Z"
            }
        ]
    },
    {
        "id": "xenon",
        "name": "Xenon",
        "shortName": "XNN",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://xenon.network/"
            },
            {
                "type": "coinmarketcap",
                "url": "https://coinmarketcap.com/currencies/xenon"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinhush",
        "name": "Bitcoin Hush",
        "shortName": "BTCH",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://btchush.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507089",
                "type": "airdrop_passiveparticipation",
                "date": "2018-02-01T10:55:44Z"
            }
        ]
    },
    {
        "id": "worldbitcoin",
        "name": "World Bitcoin",
        "shortName": "WBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.wbtcteam.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "503888",
                "type": "hardfork",
                "date": "2018-01-12T15:44:38Z"
            }
        ]
    },
    {
        "id": "bitcointwo",
        "name": "Bitcoin 2",
        "shortName": "BTC2",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitc2.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507850",
                "type": "airdrop_passiveparticipation",
                "date": "2018-02-05T20:16:26Z"
            }
        ]
    },
    {
        "id": "bitcoinprime",
        "name": "Bitcoin Prime",
        "shortName": "BPR",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoinprime.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop_passiveparticipation",
                "date": ""
            }
        ]
    },
    {
        "id": "anonymousbitcoin",
        "name": "Anonymous Bitcoin",
        "shortName": "ANON",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://anonymousbitcoin.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinparallel",
        "name": "Bitcoin Parallel",
        "shortName": "BCP",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoinparallel.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507000",
                "type": "airdrop",
                "date": "2018-01-31T17:58:44Z"
            }
        ]
    },
    {
        "id": "dalilcoin",
        "name": "Dalilcoin",
        "shortName": "DLC",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "Dollarcoin"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": ""
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "350000",
                "type": "airdrop",
                "date": "2015-03-30T20:17:14Z"
            }
        ]
    },
    {
        "id": "bitcoincloud",
        "name": "Bitcoin Cloud",
        "shortName": "BCL",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://github.com/aliibrahim80/dalilcoin"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "510048",
                "type": "hardfork",
                "date": "2018-02-20T07:20:59Z"
            }
        ]
    },
    {
        "id": "foxbtc",
        "name": "Fox BTC",
        "shortName": "FOXBTC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://foxbtc.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "520419",
                "type": "hardfork",
                "date": "2018-04-29T08:43:10Z"
            }
        ]
    },
    {
        "id": "microbitcoin",
        "name": "MicroBitcoin",
        "shortName": "MBC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://microbitcoin.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "525000",
                "type": "hardfork",
                "date": "2018-05-29T18:24:42Z"
            }
        ]
    },
    {
        "id": "bitcoinair",
        "name": "Bitcoin Air",
        "shortName": "AIR",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "AirToken"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinair.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop_passiveparticipation",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinhex",
        "name": "BitcoinHEX",
        "shortName": "BHX",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinhex.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinlambo",
        "name": "Bitcoin Lambo",
        "shortName": "BTL",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinlambo.tech/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "515350",
                "type": "hardfork",
                "date": "2018-03-27T03:46:52Z"
            }
        ]
    },
    {
        "id": "bitcoinclass",
        "name": "Bitcoin Class",
        "shortName": "BCS",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinclass.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "note": "BCH Fork",
                "ratio": 1,
                "block": "528000",
                "type": "hardfork",
                "date": "2018-06-18T02:51:04Z"
            }
        ]
    },
    {
        "id": "bitcoinpro",
        "name": "Bitcoin Pro",
        "shortName": "BTP",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoinpro.team/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "506984",
                "type": "airdrop",
                "date": "2018-01-31T14:31:13Z"
            }
        ]
    },
    {
        "id": "qeditas",
        "name": "Qeditas",
        "shortName": "QED",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://qeditas.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "350000",
                "type": "airdrop_passiveparticipation",
                "date": "2015-03-30T20:17:14Z"
            }
        ]
    },
    {
        "id": "bitcoinholocaust",
        "name": "Bitcoin Holocaust",
        "shortName": "BTHOL",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bitcoinholocaust.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501488",
                "type": "hardfork",
                "date": "2017-12-28T23:06:52Z"
            }
        ]
    },
    {
        "id": "bitcointi",
        "name": "BitcoinTi",
        "shortName": "BTCTI",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.btcti.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "512480",
                "type": "hardfork",
                "date": "2018-03-07T19:05:31Z"
            }
        ]
    },
    {
        "id": "bitcoindollar",
        "name": "Bitcoin Dollar",
        "shortName": "BTD",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoindollar.io"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop",
                "date": ""
            }
        ]
    },
    {
        "id": "smartbitcoin",
        "name": "Smart Bitcoin",
        "shortName": "SBC",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "StrikeBitClub"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "http://www.smartbitcoin.one/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "520000",
                "type": "hardfork",
                "date": "2018-04-26T08:40:17Z"
            }
        ]
    },
    {
        "id": "bitcoindao",
        "name": "Bitcoin Dao",
        "shortName": "BTD",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcointalk.org/index.php?topic=3585668"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "531650",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinblvck",
        "name": "Bitcoin Blvck",
        "shortName": "BTCV",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://btcblvck.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507777",
                "type": "airdrop_passiveparticipation",
                "date": "2018-02-05T11:58:13Z"
            }
        ]
    },
    {
        "id": "bitcoincoral",
        "name": "Bitcoin Coral",
        "shortName": "BTCO",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://bitcoincoral.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "491407",
                "type": "hardfork",
                "date": "2017-10-23T23:20:39Z"
            }
        ]
    },
    {
        "id": "bitcoinsudu",
        "name": "Bitcoin Sudu",
        "shortName": "SUDU",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bitcoinsudu.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "hardfork",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinking",
        "name": "Bitcoin King",
        "shortName": "BCK",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://btcking.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499999",
                "type": "airdrop",
                "date": "2017-12-18T17:34:47Z"
            }
        ]
    },
    {
        "id": "bitcoinx2",
        "name": "Bitcoinx2",
        "shortName": "BTCX2",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "https://btcx2.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop",
                "date": ""
            }
        ]
    },
    {
        "id": "bitcoinmetal",
        "name": "Bitcoin Metal",
        "shortName": "BTCM",
        "isCrawlable": false,
        "crawlAlternativesWithSameSymbol": [
            {
                "name": "BTCMoon"
            }
        ],
        "links": [
            {
                "type": "website",
                "url": "https://www.bitcoinmetal.org/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "type": "airdrop",
                "date": ""
            }
        ]
    },
    {
        "id": "bitclassiccoin",
        "name": "BitClassic Coin",
        "shortName": "BICC",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://bicc.io/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "type": "hardfork",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    },
    {
        "id": "byteether",
        "name": "Bytether",
        "shortName": "BTH",
        "isCrawlable": true,
        "links": [
            {
                "type": "website",
                "url": "http://www.bytether.com/"
            }
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "date": "2017-08-01T11:16:14Z",
                "type": "airdrop",
            }
        ]
    },
]
module.exports = data
