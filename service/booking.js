const repository = require('../repository')

async function checkBooking (userId, eventId) {
    const book = await repository.booking.checkBooking(userId, eventId)
    if (book === null) {
        return false
    }
    else {
        return true 
    }
}

async function create(userId, eventId) {
  let newBooking = await repository.booking.create(userId, eventId)
  return newBooking
}

module.exports = {
  create,
  checkBooking,
}