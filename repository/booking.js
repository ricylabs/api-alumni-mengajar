const luxon = require('luxon')
const moment = require('moment-timezone')
const model = require('../datastore/mongo/model')

function checkBooking (userId, eventId) {
    return model.booking.findOne({userId,eventId})
}

function create(userId, eventId) {
  const dateTimeNow = moment.tz(luxon.DateTime.now().toString(), "Asia/Jakarta")
  const data = { 
    userId,
    eventId,
    createdAt : dateTimeNow,
  }
  return model.booking.create(data)
}

module.exports = {
  create,
  checkBooking
}