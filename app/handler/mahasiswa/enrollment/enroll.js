const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const eventId = req.params.eventId

  let event = await service._event.getEventById(eventId)
  
  if(event === null) {
    return res.satus(404).json({
      statusCode: 404,
      status: 'Not Found',
      message: 'Could not found event!'
    })
  }

  const enrolled = event.enrolled
  const capacity = event.capacity

  if(enrolled >= capacity) {
    return res.satus(400).json({
      statusCode: 400,
      status: 'Bad Request',
      message: 'Event was already full'
    })
  }

  const enroll = await service.enrollment.create(userId, eventId)

  return res.status(201).json({
    statusCode: 201,
    status: 'CREATED',
    result: {
      enrollId: enroll._id
    },
    message: 'Successfully enrolled Event'
  })
}