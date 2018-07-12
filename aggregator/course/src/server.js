const coursefinder = require('./coursefinder');
const pairfinder = require('./pairfinder')
const express = require('express')
const config = require('./config');
const heapdump = require('heapdump')

var app = express()

app.route('/api/__debug/heapdump')
  .get(function(req, res) {
    const fileName = `${config.debug.heap.dump.directory}/heapdump-${Date.now()}.heapsnapshot`

    heapdump.writeSnapshot(fileName, function(err, filename) {
      if(err) {
        res.status(500)
        res.send({
          error: err
        })
      } else {
        res.status(200)
        res.send({
          file: filename
        })
      }
    });
  })

app.route('/api/ratios/:type/:symbol')
  .get(function(req, res) {
    const days = Number.parseInt(req.query.days) || coursefinder.DEFAULT_DAYS

    coursefinder.getRatios({
      name: req.params.symbol,
      type: req.params.type
    }, coursefinder.DEFAULT_DESTINATION, days)
    .then(ratios => {
      res.send({
        ratios: ratios
      })
    })
    .catch(err => {
      res.status(500);
      res.send({
        error: "" + err
      })
    })
  })

app.route('/api/ratios/:fType/:fSymbol/:tType/:tSymbol')
  .get(function(req, res) {
    const days = Number.parseInt(req.query.days) || coursefinder.DEFAULT_DAYS

    coursefinder.getRatios({
      name: req.params.fSymbol,
      type: req.params.fType
    },{
      name: req.params.tSymbol,
      type: req.params.tType
    }, days)
    .then(ratios => {
      res.send({
        ratios: ratios
      })
    })
    .catch(err => {
      res.status(500);
      res.send({
        error: "" + err
      })
    })
  })

app.route('/api/pairs')
  .get(function(req, res) {
    pairfinder()
    .then(pairs => {
      res.send({
        pairs: pairs
      })
    })
    .catch(err => {
      res.status(500);
      res.send({
        error: "" + err
      })
    })
  })

app.listen(3000)
