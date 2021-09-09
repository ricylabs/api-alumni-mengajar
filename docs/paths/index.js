const path = require('path')
const docsdir = `${path.dirname(require.main.filename)}/docs/apis`

const account = require('./account')

module.exports = {
  'paths':{
    ...account
  }
}