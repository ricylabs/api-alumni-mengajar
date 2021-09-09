const app = require('./app')
const cors = require('./cors')
const database = require('./database')
const jwt = require('./jwt')

module.exports = {
  app,
  cors,
  database,
  jwt
}