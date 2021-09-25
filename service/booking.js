const repository = require('../repository')

async function create(data) {
  let newBooking = await repository.booking.create(data)
}

module.exports = {
  craete,
}