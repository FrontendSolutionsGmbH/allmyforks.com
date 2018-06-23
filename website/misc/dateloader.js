
const fetch = require('node-fetch')
const fs = require('fs-extra');
function getTimestamp(dateobj) {
    dateobj.setTime(dateobj.getTime() + (dateobj.getTimezoneOffset() * 60000));

    var datetime = {
        date: [
            dateobj.getFullYear(),
            dateobj.getMonth() + 1,
            dateobj.getDate()
        ],
        time: [
            dateobj.getHours(),
            dateobj.getMinutes(),
            dateobj.getSeconds()
        ]
    };

    for (var key in datetime) {
        if (!datetime.hasOwnProperty(key)) {
            continue;
        }

        for (var i in datetime[key]) {
            if (!datetime[key].hasOwnProperty(i)) {
                continue;
            }

            var n = datetime[key][i];
            datetime[key][i] = (n < 10 ? '0' : '') + n;
        }
    }

    return datetime.date.join('-') + 'T'
        + datetime.time.join(':') + 'Z';
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var getBitcoinTimeByBlock = function(block) {
	var url = 'http://blockchain.info/de/block-height/' + block

	 return fetch(url)
            .then((res) => {
                if (res.status === 200) {
                    //  console.log('fetching success ', res.status, coin.shortName)
                    return res.text()
                } else {
                console.log('!= 200', block)
                    return ''
                }
            }).catch((res) => {
                console.log('network problem', block)
                return ''
            }).then((body) => {

            	 var re = new RegExp('Zeit.*?<td>(.*?)</td>');
				var r  = body.replace(/(?:\r\n|\r|\n)/g, '').match(re);
				if (r)
				    return getTimestamp(new Date(r[1]))
				else 
					return ''

                return json
            })
}

/*getBitcoinTimeByBlock(478558).then((r) => {
	console.log(r)
})*/


const localBTCData = require('../src/input/local-btc-forks.js')
var coins = localBTCData.filter(c => c.parents && c.parents.length > 0)


var promises = coins.map((coin) => {
		var parents = coin.parents.filter(p =>(isNumeric(p.block) /*&& (p.date.indexOf('T') < 0 || p.date.indexOf('Z') < 0)*/))

		return Promise.all(parents.map((parent) => {
				return getBitcoinTimeByBlock(parent.block).then((r) => {
					if (r) {
						console.log(coin.id, r)
						parent.date = r
					} else {
						console.log('problem', coin.id)
					}
				})

			}))
	})
	

				
Promise.all(promises).then((result) => {
	//console.log(coins)
      fs.writeFileSync('./src/input/local-btc-forks.js', 'const data = ' + JSON.stringify(localBTCData, null, 2) + "\r\nmodule.exports = data\r\n", 'utf-8')
 })