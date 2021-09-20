const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const service = require('../../../../service')
const helper = require('../../../../helper')

module.exports = async function upcoming(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const date = new Date()
  const now = moment.tz(date.toISOString(), 'Asia/Jakarta')
  const events = await service._event.getAllByUserId(userId)
  const eventsTimeDiff = events.map(event => {
    let currEvent = JSON.parse(JSON.stringify(event))
    const eventDate = event.dateTime.date
    const startHour = event.dateTime.start
    const eventTime = new Date(`${eventDate} ${startHour}`)
    const formattedEventTime = moment.tz(eventTime.toISOString(), 'Asia/Jakarta')
    const diff = formattedEventTime.diff(now, 'minutes')
    currEvent['minDiff'] = diff
    return currEvent
  })
  let upcomingEvent = eventsTimeDiff.sort((a, b) => a.minDiff - b.minDiff)
                 .filter((item, index, array) => item.minDiff === array[0].minDiff)[0]
  delete upcomingEvent.minDiff
  return res.status(200).json({
    statusCode: 200,
    status: 'OK',
    result: {
      upcomingEvent
    },
    message: "Successfully returned alumni's Upcoming Event"
  })
}