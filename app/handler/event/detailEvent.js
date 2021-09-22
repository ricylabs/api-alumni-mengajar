const jwt = require('jsonwebtoken')
const { replaceOne } = require('../../../datastore/mongo/model/user')

const service = require('../../../service')

module.exports = async function detailEvent(req,res) {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.decode(token).id
    const user = await service.user.getUserById(userId)
    const role = user.role
    const event = await service._event.
    console.log(user)
    //databooking
    const isBooked = await service.booking.checkBooking("terserah mau ngetik apa","ini event")
    return res.status(200).json({isBooked})
}