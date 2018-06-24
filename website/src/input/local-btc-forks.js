const data = [
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
        "parents": []
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "date": "2017-08-01T11:16:14Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "date": "2017-12-12T09:29:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "498888",
                "date": "2017-12-12T09:29:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499999",
                "date": "2017-12-18T17:34:47Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "date": "2017-12-27T05:55:44Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501407",
                "date": "2017-12-28T09:52:58Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501407",
                "date": "2017-12-28T09:52:58Z",
                "dateFormat": "monthAndYear"
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505888",
                "date": "2018-01-24T13:26:41Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": "2017-12-28T09:52:58Z",
                "dateFormat": "monthAndYear"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498777",
                "date": "2017-12-11T17:19:12Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10,
                "block": "495866",
                "date": "2017-11-24T08:20:12Z"
            }
        ]
    },
    {
        "id": "bitcoinoil",
        "name": "Bitcoin Oil ",
        "shortName": "OBTC",
        "links": [],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10,
                "block": "498888",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "499777",
                "date": "2017-12-17T11:11:17Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 100,
                "block": "499999",
                "date": "2017-12-18T17:34:47Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "500000",
                "date": "2017-12-18T17:35:25Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501118",
                "date": "2017-12-26T12:50:32Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1000,
                "block": "501225",
                "date": "2017-12-27T05:55:44Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501451",
                "date": "2017-12-28T17:02:33Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "date": "2017-12-31T11:32:38Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505050",
                "date": "2018-01-19T20:58:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501949",
                "date": "2017-12-31T21:53:08Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505083",
                "date": "2018-01-20T01:04:45Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501368",
                "date": "2017-12-28T03:29:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "date": "2017-08-01T11:16:14Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "date": "2017-12-12T09:29:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498848",
                "date": "2017-12-12T03:44:12Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 3.93946357,
                "block": "500283",
                "date": "2017-12-20T14:57:32Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498577",
                "date": "2017-12-10T13:42:24Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "518800",
                "date": "2018-04-18T13:26:13Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "date": "2017-12-31T11:32:38Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "TBD",
                "status": "unforked",
                "date": "2018-08-31T05:01:43Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "block": "516095",
                "date": "2018-04-01T05:01:43Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "505050",
                "date": "2018-01-19T20:58:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 100,
                "block": "505050",
                "date": "2018-01-19T20:58:53Z",
                "status": "pending"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501368",
                "date": "2017-12-28T03:29:53Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501000",
                "date": "2017-12-25T16:42:45Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501888",
                "date": "2017-12-31T11:32:38Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 0.5,
                "block": "",
                "date": ""
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "478558",
                "date": "2017-08-01T11:16:14Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499345",
                "date": "2017-12-14T23:15:00Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499888",
                "date": "2017-12-18T01:55:58Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 10000,
                "status": "pending",
                "block": "",
                "date": ""
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "date": "2017-12-27T05:55:44Z"
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
        ],
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "506066",
                "date": "2018-01-25T14:20:45Z"
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "300377",
                "date": "2014-05-12T10:48:17Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "576698",
                "date": "2014-05-12T10:48:17Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498754",
                "date": "2017-12-11T14:07:40Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "512666",
                "date": "2018-03-08T23:55:01Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "500000",
                "date": "2017-12-18T17:35:25Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501225",
                "date": "2017-12-27T05:55:44Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "508888",
                "date": "2018-02-12T21:26:22Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507089",
                "date": "2018-02-01T10:55:44Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "503888",
                "date": "2018-01-12T15:44:38Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507850",
                "date": "2018-02-05T20:16:26Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507000",
                "date": "2018-01-31T17:58:44Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "350000",
                "date": "2015-03-30T20:17:14Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "510048",
                "date": "2018-02-20T07:20:59Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "520419",
                "date": "2018-04-29T08:43:10Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "525000",
                "date": "2018-05-29T18:24:42Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "515350",
                "date": "2018-03-27T03:46:52Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "note": "BCH Fork",
                "ratio": 1,
                "block": "528000",
                "date": "2018-06-18T02:51:04Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "506984",
                "date": "2018-01-31T14:31:13Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "350000",
                "date": "2015-03-30T20:17:14Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "501488",
                "date": "2017-12-28T23:06:52Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "512480",
                "date": "2018-03-07T19:05:31Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "520000",
                "date": "2018-04-26T08:40:17Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "531650",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "507777",
                "date": "2018-02-05T11:58:13Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "491407",
                "date": "2017-10-23T23:20:39Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "499999",
                "date": "2017-12-18T17:34:47Z"
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "",
                "date": ""
            }
        ]
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
        "parents": [
            {
                "id": "bitcoin",
                "ratio": 1,
                "block": "498888",
                "date": "2017-12-12T09:29:53Z"
            }
        ]
    }
]
module.exports = data
