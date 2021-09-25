const account = require('./account')
const alumni = require('./alumni')
const search = require('./search')

module.exports = {
  'paths':{
    ...account,
    ...alumni,
    ...search,
  }
}