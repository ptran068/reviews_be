import Joi from 'joi'
import customizeErrorMessage from '../../utils/base-validate';

export default {
  validateUpload: {
    body: {
      image: Joi.string().empty().error(customizeErrorMessage())
    }
  }
}
