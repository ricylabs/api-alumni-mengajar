const jwt = require('jsonwebtoken')
const luxon = require('luxon')
const moment = require('moment-timezone')

const service = require('../../../service')
const helper = require('../../../helper')


module.exports = async function createEvent(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const userId = jwt.decode(token).id

  const time = moment.tz(luxon.DateTime.now().toString(), "Asia/Jakarta");
  const engDay = time.format('dddd')
  const engMonth = time.format('MMMM')
  const day = helper.converter.toIndonesiaDay(engDay)
  const month = helper.converter.toIndonesiaMonth(engMonth)
  let dateTime = {
    date: req.body.date,
    day,
    month,
    start: req.body.start,
    end: req.body.end,
  }
  req.body.date = dateTime
  delete req.body.start
  delete req.body.end 
  const _event = helper.objectManipulation.renameKey(req.body, 'date', 'dateTime')
  _event.userId = userId
  const newEvent = await service.alumni.create(_event)
  res.status(201).json({
    status:"Created",
    code: "201",
    data: {
      id: newEvent.id,
      userId: newEvent.userId,
      imageId: newEvent.imageId
    },
    message: 'Succesfully created Event'
  })
}