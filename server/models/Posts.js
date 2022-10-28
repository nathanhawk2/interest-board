const { model, Schema } = require('mongoose');

const postSchema = new Schema ({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString()
  },
  theme:String,
  comments: [{
    body: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: String,
  }],
  likes:[{
    username: String,
    createdAt: String,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = model('Post', postSchema);