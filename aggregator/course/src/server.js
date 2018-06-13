const coursefinder = require('./coursefinder');
const pairfinder = require('./pairfinder')
const express = require('express')

var app = express()

app.route('/api/ratios/:type/:symbol')
  .get(function(req, res) {
    coursefinder({
      name: req.params.name,
      type: req.params.type
    })
    .then(ratios => {
      res.send({
        ratios: ratios
      })
    })
    .catch(err => {
      res.status(500);
      res.send({
        error: err
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
        error: err
      })
    })
  })

app.listen(3000)
