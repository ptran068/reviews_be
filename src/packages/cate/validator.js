import Joi from 'joi'
import config from '../../config'
import customizeErrorMessage from '../../utils/base-validate';


export default {
  validateStore: {
    body: {
      name: Joi.string().required().max(255).min(3).label('name').error(customizeErrorMessage()),
    }
  },
  validateUpdate: {
    body: {
      name: Joi.string().required().max(255).min(3).label('name').error(customizeErrorMessage()),
    }
  },
  validateGetPaginate: {
    query: {
      page: Joi.number().integer().default(config.pagination.page).min(1).label('page'),
      limit: Joi.number().integer().default(config.pagination.limit).label('limit'),
    }
  },
  validateGet: {
    params: {
      id: Joi.string().required().regex(config.regex.objectId).error(customizeErrorMessage())
    }
  }
}
