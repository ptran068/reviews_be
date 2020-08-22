import Cate from './model'
import queryBuilder from './query-builder'

function getActivePaginate(limit, keyword, page) {
  return Cate.aggregate(queryBuilder.getActivePagination(limit, keyword, page));
}

async function create(data) {
  return Cate.create(data)
}

async function update(id, data) {
  return Cate.findByIdAndUpdate(id, data, { new: true })
}

async function destroy(id) {
  return Cate.findByIdAndRemove(id)
}

async function findOne(condition) {
  return Cate.findOne(condition)
}

async function find(condition) {
  return Cate.find(condition).select('name id').lean(true)
}

async function findById(id) {
  return Cate.findById(id)
}

export default {
  create,
  update,
  destroy,
  find,
  findById,
  findOne,
  getActivePaginate
}
