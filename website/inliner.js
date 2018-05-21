var Inliner = require('inliner');

new Inliner('http://web.froso.de/bitcoin-forks/test.htm', function (error, html) {
  // compressed and inlined HTML page
  console.log(html);
});