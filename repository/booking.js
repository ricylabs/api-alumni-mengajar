const model = require('../datastore/mongo/model')

<<<<<<< HEAD
function checkBooking (userId, eventId) {
    return model.booking.findOne({userId,eventId})
}

module.exports = {
    checkBooking,
=======
function create(data) {
  return model.booking.save(data)
}

module.exports = {
  getAllByUserId
>>>>>>> alumni
}