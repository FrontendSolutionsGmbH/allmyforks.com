"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currency = mongoose.Schema({
  symbol: {
    type: String
  },
  type: {
    type: String
  }
},{ _id : false });

const CourseHistoricalSchema = new Schema({
  from: {
    type: currency,
  },
  to: {
    type: currency,
  },
  date: {
    type: Date,
  },
  open: {
    type: Number,
  },
  high: {
    type: Number,
  },
  low: {
    type: Number,
  },
  close: {
    type: Number,
  },
  volume: {
    type: Number,
  }
});

CourseHistoricalSchema.index({ from: 1, to: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('course_historical', CourseHistoricalSchema);
