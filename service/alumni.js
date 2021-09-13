const repository = require('../repository')

async function create(data) {
  let newEvent = await repository.alumni.create(data)
  return newEvent
}


module.exports = {
  create
}