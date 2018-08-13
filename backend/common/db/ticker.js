"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currency = mongoose.Schema({
  name: {
    type: String
  },
  type: {
    type: String
  }
},{ _id : false });

const CourseTickerSchema = new Schema({
  from: {
    type: currency,
  },
  to: {
    type: currency,
  },
  date: {
    type: Date,
  },
  course: {
    type: Number,
  },
  volume: {
    type: Number,
  },
  change: {
    type: Object,
  }
});

CourseTickerSchema.index({ from: 1, to: 1 }, { unique: true });

module.exports = {
  name: 'course_ticker',
  schema: CourseTickerSchema,
  model: mongoose.model('course_ticker', CourseTickerSchema),
};
