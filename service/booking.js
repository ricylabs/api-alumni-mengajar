const repository = require('../repository')

async function checkBooking (userId, eventId) {
    const book = await repository.booking.checkBooking(userId, eventId)
    console.log(book)
    if (book === null) {
        return false
    }
    else {
        return true 
    }
}

module.exports = {
    checkBooking,
}