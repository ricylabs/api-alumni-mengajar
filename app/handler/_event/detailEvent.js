const jwt = require('jsonwebtoken')
const { replaceOne } = require('../../../datastore/mongo/model/user')

const service = require('../../../service')

module.exports = async function detailEvent(req,res) {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.decode(token).id
    const user = await service.user.getUserById(userId)
    const role = user.role
    const eventId = req.params.eventId
    const getEvent = await service._event.getEventById(eventId) 
    const event = JSON.parse((JSON.stringify)(getEvent))
    const isBooked = await service.booking.checkBooking(userId,eventId)
    if(role === "mahasiswa" && !isBooked) {
        // delete event.link
    }

    const alumni = await service.user.getUserById(event.userId)
    const alumniName = `${alumni.firstName} ${alumni.lastName}`

    // const tagEvents = await service.tag.getTagById

    const eventDate = event.dateTime
    const result = {
      event: {
        id: event.id,
        title: event.title,
        date: `${eventDate.day}, ${eventDate.date.slice(-2)} ${eventDate.month} ${eventDate.date.slice(3)}`,
        price: event.price,
        speaker: alumniName,
        // tag
        mahasiswa: {
          id: userId,
          isBooked
        },

      }
    }

    return res.status(200).json({
      statusCode: 200,
      status: 'OK',
      result: {
        event
      },
      message: 'Successfully returned detail event'
    })
}