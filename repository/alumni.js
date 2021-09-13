const uuid = require('uuid')
const luxon = require('luxon')
const moment = require('moment-timezone')

const model = require('../datastore/mongo/model')

function create(data) {
  const  id = uuid.v4()
  const imageId = uuid.v4()
  const dateTimeNow = moment.tz(luxon.DateTime.now().toString(), "Asia/Jakarta")

  const newEvent = {
    id,
    ...data,
    imageId,
    visited: 0,
    createdAt: dateTimeNow,
    updatedAt: dateTimeNow,
  }
  
  return model._event.create(newEvent)
}

module.exports = {
  create,
}