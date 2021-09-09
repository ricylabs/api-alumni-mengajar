const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = admin = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)
  const authorizationType = await user.authorizationType

  if (authorizationType !== 'admin') return res.status(403).json({ message: 'Unauthorized, only for Admin!'})
  
  next()
}