const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')

router.get(
  '/profile',
  handler.mahasiswa.profile
)

router.get(
  '/dashboard/popular-event',
  [
    middleware.verification.jwt,
    middleware.verification.mahasiswa
  ],
  handler.mahasiswa.dashboard.popularEvent
)

module.exports = router