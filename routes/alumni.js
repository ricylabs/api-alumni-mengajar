const express = require('express')
const multer = require('multer')
const upload = multer()
const router = require('express').Router()

// Middleware
const middleware = require('../app/middleware')

// Schema
const schema = require('../app/schema')

// Handler
const handler = require('../app/handler')

router.get(
  '/dashboard',
  [
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni.dashboard
)

router.post(
  '/event',
  [
    middleware.validation.schema(schema.alumni.event),
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni._event.create
)

router.get(
  '/event/upcoming',
  [
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni._event.upcoming,
)
module.exports = router