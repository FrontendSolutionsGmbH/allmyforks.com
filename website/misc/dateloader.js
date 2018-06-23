const http = require('http');
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



var getBitcoinTimeByBlock = function(block, callback) {

	var options = {
	  host: 'blockchain.info',
	  port: 80,
	  path: '/de/block-height/' + block
	};

	http.get(options, function(res) {
	  //console.log("Got response: " + res.statusCode);
	  

	   if (res.statusCode === 200) {

	   	var body = '';
		  res.on('data', function(chunk) {
		    body += chunk;
		  });

	   	 res.on('end', function () {
	    	//console.log(body)
	   	  var re = new RegExp('Zeit.*?<td>(.*?)</td>');
			var r  = body.replace(/(?:\r\n|\r|\n)/g, '').match(re);
			if (r)
			    callback(r[1])
			else 
				callback(null)

	  	 });


	   }
	 
	}).on('error', function(e) {
	  //console.log("Got error: " + e.message);
	  callback(null)
	});


	
}

getBitcoinTimeByBlock(501225, (result) => {
	if (result) {
		console.log(getTimestamp(new Date(result)))
	} else {
		console.log('not fount')
	}
})