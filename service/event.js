const repository = require('../repository')

async function create(data) {
  let newEvent = await repository._event.create(data)
  return newEvent
}

async function upload(file, destination) {
  let uploadedImage = await repository._event.upload(file, destination)
  return uploadedImage
}

async function getEventById(id) {
  let event = await repository._event.getEventById(id)
  return event 
}

async function getAllByUserId(userId) {
  let events = await repository._event.getAllByUserId(userId)
  return events
}

module.exports = {
  create,
  upload,
  getEventById,
  getAllByUserId,
}