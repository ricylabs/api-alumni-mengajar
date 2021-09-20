const account = require('./account')
const alumni = require('./alumni')

module.exports = {
  'paths':{
    ...account,
    ...alumni,
  }
}