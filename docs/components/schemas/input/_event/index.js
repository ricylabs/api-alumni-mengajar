const create = require('./create')
const upload = require('./upload')

module.exports = {
  ...create,
  ...upload,
}