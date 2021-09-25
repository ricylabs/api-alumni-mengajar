const model = require('../datastore/mongo/model')

function checkBooking (userId, eventId) {
    return model.booking.findOne({userId,eventId})
}

function create(data) {
  return model.booking.save(data)
}

module.exports = {
  create,
  checkBooking
}