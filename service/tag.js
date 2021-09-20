const repository = require('../repository')

async function create(type, otherId, tag) {
  const types = ['event','alumni','article']
  if (!types.includes(type)) throw "Invalid tag type"

  const objTag = await repository.tag.getTagByName(tag)

  let newTag
  if (objTag === null) {
    const data = {
      tag: tag,
      usage: 1,
    }
    newTag = await repository.tag.create(data)
  } else {
    newTag = await repository.tag.addUsage(tag)
  }

  const tagId = await newTag._id
  switch (type) {
    case 'event':
        await repository.tag.relationship.createTagEvent(otherId, tagId)
      break;
    case 'alumni':
        await repository.tag.relationship.createTagAlumni(otherId, tagId)
      break;
    case 'article':
      await repository.tag.relationship.createTagArticle(otherId, tagId)
    break;
    default:
      break;
  }
  return newTag
}

module.exports = {
  create,
}