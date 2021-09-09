const jwt = require('jsonwebtoken')

const service = require('../../../service')

module.exports = async function dashboard(req, res) {
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.decode(token).id
  const user = await service.user.getUserById(id)

  const currUser = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    authorizationType: user.authorizationType,
  }

  return res.status(200).json({
    user: currUser,
    publicEvent: 0,
    articlesPublished: 0,
    audiences: 0,
    upcomingEvent: [],
    mostFavourable: [],
    mostRead: [],
    recentArticles: [],
  })
}