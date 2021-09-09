const login = require('./login')
const register = require('./register')

module.exports = {
  '/account/login': {
    ...login
  },
  '/account/register': {
    ...register
  }
}