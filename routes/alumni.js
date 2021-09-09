const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')

router.get(
  '/',
  [
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni.dashboard
)


module.exports = router