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
  '/dashboard/upcoming-event',
  [
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni.dashboard.upcoming,
)

router.get(
  '/dashboard/most-favourable-event',
  [
    middleware.verification.jwt,
    middleware.verification.alumni,
  ],
  handler.alumni.dashboard.mostFavourableEvent
)
module.exports = router