const express = require('express')

const middleware = require('../app/middleware') // Middleware
const schema = require('../app/schema') // Schema
const handler = require('../app/handler') // Handler

const router = express.Router()

router.post(
  '/register',
  [
    middleware.validation.schema(schema.register),
    middleware.uniqueData.username,
    middleware.uniqueData.email
  ],
  handler.account.register
)

router.post(
  '/login',
  handler.account.login
)

module.exports = router