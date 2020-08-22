import mongoose from 'mongoose';
import statics from './static'
import methods from './method'
const Schema = mongoose.Schema;
let userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role: {
      type: String,
      default: 'User'
    },
    deleteAt: {
        type: Date,
        default: null
    }
});

userSchema.statics = statics

userSchema.methods = methods

userSchema.pre('find', function() {
    preFindMiddleware(this.getQuery());
});

userSchema.pre('findOne', function() {
    preFindMiddleware(this.getQuery());
});

userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        return next(new Error('this email has been using'));
    }
    return  next(error);
});

function preFindMiddleware(query) {
    return query.deletedAt = null;
}

module.exports = mongoose.model('User',userSchema);
