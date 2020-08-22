import repo from './repository'
import config from '../../config'

async function create(req) {
  let data = req.body
  const file = req.file
  if (!file) {
    throw new Error(config.errorResponse.create)
  }
  data.name = file.filename

  return repo.create(data)
}

async function destroy(req) {
  const { id } = req.params
  return repo.destroy(id)
}

export default {
  create,
  destroy
};
