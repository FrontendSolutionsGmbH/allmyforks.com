"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseHistoricalSchema = new Schema({
  symbol: {
    type: String,
  },
  fiat: {
    type: String,
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

CourseHistoricalSchema.index({ symbol: 1, type: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('course_historical', CourseHistoricalSchema);
