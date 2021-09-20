const uuid = require('uuid')
const luxon = require('luxon')
const moment = require('moment-timezone')
const admin = require("firebase-admin")
const { format } = require("util")

const model = require('../datastore/mongo/model')
const config = require('../config')

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

async function upload(file, destination) {

  const bucket = admin.storage().bucket()
  const bucketFile = bucket.file(destination)

  await bucketFile.save(file)

  const public = await bucketFile.makePublic()
  return {
    image: public[0].object,
    publicUrl: format(
      `https://storage.googleapis.com/${public[0].bucket}/${public[0].object}`
    )
  }
}

module.exports = {
  create,
  upload,
}