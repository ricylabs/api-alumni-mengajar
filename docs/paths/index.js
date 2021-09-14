const path = require('path')
const docsdir = `${path.dirname(require.main.filename)}/docs/apis`

const account = require('./account')
const _event = require('./_event')

module.exports = {
  'paths':{
    ...account,
    ..._event,
  }
}