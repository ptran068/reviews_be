import mongoose from 'mongoose';
import { Schema } from '../../utils/mongoose'

const cateSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
}, { timestamps: true });

cateSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new Error('this cate has been using'))
  }
  return next(error)
})

module.exports = mongoose.model('cate', cateSchema);
