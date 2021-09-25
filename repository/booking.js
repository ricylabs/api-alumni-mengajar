const model = require('../datastore/mongo/model')

function create(data) {
  return model.booking.save(data)
}

module.exports = {
  getAllByUserId
}