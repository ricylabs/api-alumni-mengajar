const account = require('./account')
const alumni = require('./alumni')
const search = require('./search')
const _event = require('./_event')

module.exports = {
  'paths':{
    ...account,
    ...alumni,
    ...search,
    ..._event,
  }
}