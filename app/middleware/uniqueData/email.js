const service = require('../../../service')

module.exports = email = async (req, res, next) => { 
    let { email } = req.body
    let user = await service.user.getUserByEmail(email)
    if (user) return res.status(403).json({ message: 'Email has already been taken' })
    else next()
}