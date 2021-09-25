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
        delete event.link
    }
    console.log(event)
    //databooking
    return res.status(200).json({event})
}