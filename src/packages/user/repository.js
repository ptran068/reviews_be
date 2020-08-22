import User from './model'
// import queryBuilder from './query-builder'

async function create(data) {
  return User.create(data)
}

async function update(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true })
}

async function destroy(id) {
  return User.findByIdAndUpdate(id,{ $set: { deletedAt: new Date() } }, { new: true })
}

async function findOne(condition) {
  return User.findOne(condition)
}

async function find(condition) {
  return User.find(condition)
}

async function findById(id) {
  return User.findById(id)
}

export default {
  create,
  update,
  destroy,
  find,
  findById,
  findOne
}
