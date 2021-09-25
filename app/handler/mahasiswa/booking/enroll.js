const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const user = await service.user.getUserById(userId)

  const eventId = req.params.eventId

  let event = await service._event.getEventById(eventId)
  
  if(event === null) {
    return res.satus(404).json({
      statusCode: 404,
      status: 'NOT FOUND',
      message: 'INVALID EVENT ID'
    })
  }

  const enrolled = event.enrolled
  const capacity = event.capacity

  if(enrolled >= capacity) {
    return res.satus(400).json({
      statusCode: 400,
      status: 'BAD REQUEST',
      message: 'Event already full'
    })
  }

  const enroll = await service.booking.create(userId, eventId)

  return res.status(201).json({
    statusCode: 201,
    status: 'CREATED',
    result: {
      bookingId: enroll._id
    },
    message: 'Successfully enrolled Event'
  })
}