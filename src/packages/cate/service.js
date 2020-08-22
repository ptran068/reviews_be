import lodash from 'lodash'
import repo from './repository'
import config from '../../config';

const ALLOWED_ATTRIBUTE = ['name']


async function create(req) {
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE)
  const cate = await repo.create(data)
  if (cate) {
    return cate
  }

  throw new Error(config.errorResponse.create)
}

async function update(req) {
  const data = lodash.pick(req.body, ALLOWED_ATTRIBUTE)
  const cate = await repo.update(req.params.id, data)
  if (cate) {
    return cate
  }

  throw new Error(config.errorResponse.update)
}

async function destroy(req) {
  const cate = await repo.destroy(req.params.id)
  if (cate) {
    return repo.destroy(req.params.id)
  }

  throw new Error(config.errorResponse.destroy)
}

export default {
  create,
  update,
  destroy,
}
