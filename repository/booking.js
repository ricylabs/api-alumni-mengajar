const model = require('../datastore/mongo/model')

function checkBooking (userId, eventId) {
    return model.booking.findOne({userId,eventId})
}

module.exports = {
    checkBooking,
}