const repository = require('../repository')

async function create(data) {
  let newEvent = await repository._event.create(data)
  return newEvent
}

async function upload(file, destination) {
  let uploadedImage = await repository._event.upload(file, destination)
  return uploadedImage
}

module.exports = {
  create,
  upload
}