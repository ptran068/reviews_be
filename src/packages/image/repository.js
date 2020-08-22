import Image from './model'

function getActivePaginate(skip, limit) {
  return Image.connect(conn).find().skip(skip).limit(limit).sort({ createdAt: -1 })
}

function create(data) {
  return Image.create(data)
}

function destroy(id) {
  return Image.findByIdAndRemove(id)
}


export default {
  getActivePaginate,
  create,
  destroy,
}
