
var tableOuterElem = document.getElementById('table-forks-outer')
var sum = document.getElementById('sum-forks')

var htmlToAdd = '<table class="w3-table sortable" id="table-forks"><tr><th>#</th><th>Name</th><th class="w3-hide-small">Fork date</th><th class="w3-hide-small">Fork Block</th><th class="w3-hide-small">Price</th><th class="w3-hide-small">1 BTC=</th><th>1 BTC=</th></tr>'


var sumValues = 0

var data = window.data
data.coins[0].forks.map((e,index) => {
  var priceTimesRatio = e.Price*e.Ratio
  sumValues+=priceTimesRatio
  htmlToAdd += '<tr><td sorttable_customkey="'+index+'">#' + (index+1) + '</td><td><a href="'+e.Link+'">' + e.Name + '</a></td><td class="w3-hide-small">'+ e.Date+'</td><td class="w3-hide-small">'+ e.Block+'</td><td class="w3-hide-small" sorttable_customkey="'+e.Price+'">' + e.Price + ' € </td><td class="w3-hide-small">' + e.Ratio + ' ' + e.ShortName + '</td><td sorttable_customkey="'+priceTimesRatio+'">'+priceTimesRatio+' € </td></tr>'
})


sum.innerHTML = '<b>1 BTC= Sum forks '+sumValues+' €</b>'
tableOuterElem.innerHTML = htmlToAdd + '</table>'




var donations = [
{
  "Name": "Bitcoin",
  "Address": "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
}]

var tableDonations = document.getElementById('table-donations')
  var htmlToAdd = '' //<tr><th>Name</th><th>Address</th></tr>'


donations.map((e,index) => {

    var row = document.createElement('tr')
    htmlToAdd += '<tr><td>' + e.Name + '</a></td><td>'+e.Address+'</td></tr>'
  })

//tableDonations.innerHTML = htmlToAdd