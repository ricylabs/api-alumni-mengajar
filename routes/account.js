const express = require('express')
const multer = require('multer')

const middleware = require('../app/middleware') // Middleware
const schema = require('../app/schema') // Schema
const handler = require('../app/handler') // Handler
const upload = multer()

const router = express.Router()

router.post(
  '/register',
  [
    middleware.validation.schema(schema.account.register),
    middleware.uniqueData.username,
    middleware.uniqueData.email
  ],
  handler.account.register
)

router.post(
  '/login',
  upload.array(),
  middleware.validation.schema(schema.account.login),
  handler.account.login
)

module.exports = router