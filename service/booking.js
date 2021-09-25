const repository = require('../repository')

<<<<<<< HEAD
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
=======
async function create(data) {
  let newBooking = await repository.booking.create(data)
}

module.exports = {
  craete,
>>>>>>> alumni
}