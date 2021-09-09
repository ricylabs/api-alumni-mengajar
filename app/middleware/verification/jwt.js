const jwt = require('jsonwebtoken')

const config = require('../../../config')

module.exports = function verifyToken () {
  return function (req, res, next) {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) return res.status(401).send({message: 'Access Denied'})
    try {
      const verified = jwt.verify(token, config.jwt.secretToken)
      req.user = verified
      next()
    } catch(error) {
      res.status(400).send({message: error})
    }
  }
}
