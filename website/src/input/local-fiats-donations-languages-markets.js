const data = {
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
    ]
}

module.exports = data