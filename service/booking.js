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

async function create(data) {
  let newBooking = await repository.booking.create(data)
}

module.exports = {
  create,
  checkBooking,
}