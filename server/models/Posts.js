const { model, Schema } = require('mongoose');

const postSchema = new Schema ({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  username: String,
  createdAt: String,
  theme:String,
  comments: [{
    body: {
      type: String,
      required: true,
      trim: true,
    },
    username: String,
    createdAt: String,
  }],
  likes:[{
    username: String,
    createdAt: String,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  }
});

module.exports = model('Post', postSchema);