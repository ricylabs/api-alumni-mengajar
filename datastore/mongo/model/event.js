const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
  enrolled: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  imagesId: {
    type: String,
    require: true,
  },
  alumniId: {
    type: String,
    require: true
  },
  visited: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true
  },
  updatedAt: {
    type: Date,
    require: true
  }
})

module.exports = mongoose.model('Events', schema, 'events')
