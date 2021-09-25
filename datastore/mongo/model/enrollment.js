const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    require: true,
  },
  eventId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  }
})

module.exports = mongoose.model('Enrollments', schema, 'enrollments')