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


console.log(getTimestamp(new Date(process.argv[2])))