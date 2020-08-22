import { mongoose, Schema } from '../../utils/mongoose'

const ImageSchema = new Schema({
  name: String
}, {
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('image',ImageSchema);

