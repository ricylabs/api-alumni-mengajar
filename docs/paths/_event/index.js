const create = require('./create')
const upload = require('./upload')

module.exports = {
  '/alumni/event': {
    ...create
  },
  '/alumni/event/upload_image/{imageId}': {
    ...upload
  }
}