import { mongoose, Schema, ObjectId } from '../../utils/mongoose'

const videoSchema = new Schema({
    author: {
        type: ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    },
  
    cate: {
        type: ObjectId,
        ref: 'cate'
    },
    thumbnail: {
        type: String,
        default: 0,
    },
    youtubeId: {
        type: String
    },
    des: {
        type: String,
    },
    largeThumbnail: {
        type: String,
        default: '',
    },
},{ timestamps: true });


module.exports = mongoose.model('video',videoSchema);
