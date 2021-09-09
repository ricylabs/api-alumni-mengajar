const repository = require('../repository')

async function getUserByUsername(username) {
  let user = await repository.user.getUserByUsername(username)
  return user
}

async function getUserByEmail(email) {
  let user = await repository.user.getUserByEmail(email)
  return user
}


async function create(data) {
  let newData = await repository.user.save(data)
  return newData
}

module.exports = {
  create,
  getUserByUsername,
  getUserByEmail,
}
