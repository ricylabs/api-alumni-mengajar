const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const user = await service.user.getUserById(userId)

  const eventId = req.params.eventId

  let getEvents = await service._event.getAllSortedByVisitedAsc()


  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      events: resultEvents
    },
    message: 'Successfully returned Events for you'
  })
}