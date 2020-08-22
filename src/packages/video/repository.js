import Video from './model'


async function create(data) {
  return Video.create(data)
}

async function find(cond) {
  return Video.find(cond).populate(
    [
      {
        path: 'cate'
      },
      {
        path: 'author'
      }
    ]
  ).limit(8)
}

async function findById(id) {
  return Video.findById(id).populate(
    [
      {
        path: 'cate'
      },
      {
        path: 'author'
      }
    ]
  )
}

async function createMany(data) {
  return Video.insertMany(data)
}


async function destroy(id) {
  return Video.findByIdAndRemove(id)
}


export default {
  create,
  destroy,
  createMany,
  find,
  findById
}
