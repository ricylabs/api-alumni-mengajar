const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const user = await service.user.getUserById(userId)

  let getEvents = await service._event.getAllSortedByVisitedAsc()

  const date = new Date()
  const now = moment.tz(date.toISOString(), 'Asia/Jakarta')
  let events = JSON.parse(JSON.stringify(getEvents)).filter(_event => {
    const eventDate = _event.dateTime.date
    const startHour = _event.dateTime.start
    const eventTime = new Date(`${eventDate} ${startHour}`)
    const formattedEventTime = moment.tz(eventTime.toISOString(), 'Asia/Jakarta')
    const diff = formattedEventTime.diff(now, 'minutes')
    if (diff > 0 && (_event.enrolled < _event.capacity)) {
      return true
    }
    return false
  })

  for (let i = 0; i < events.length; i++) {
    events[i].tags = await service.tag.relationship.getAllByOtherId(events[i].id, 'event')
  }

<<<<<<< HEAD
  const mostFavourableEvents = events.slice(0, 5)

  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      events: mostFavourableEvents
    },
    message: 'Successfully returned most favourable event'
  })
=======

  console.log(events)
  return res.status(200).json({message: 'berhasil'})
>>>>>>> 89d2c51f9cf9f2805e126db2947872a48ec1dc09
}