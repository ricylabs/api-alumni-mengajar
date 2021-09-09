const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = mahasiswa = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)
  const authorizationType = await user.authorizationType

  if (authorizationType !== 'mahasiswa') return res.status(403).json({ message: 'Unauthorized, only for Mahasiswa!'})
  
  next()
}