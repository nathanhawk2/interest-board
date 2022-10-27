const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const Posts = require('../models/Posts');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    searchTheme: async (_ , args) => {
      return Post.find({ theme: args.theme})
    }
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, username, password }) => {
      const user = await User.findOne(email ? { email } : { username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createPost: async (_, args, context) => {
      return Post.create(args)
    },
    deletePost: async (_, {postID}, context) => {
      return Post.findOneAndDelete({postId: ID})
    },
    createComment: async (_, {postId, commentId}, context) => {
     
    },
    deleteComment: async (_, {postId, commentId}, context) => {
      return Comment.findOneAndUpdate(
        {_id:postId},
        {$pull: commentId}
        )
    },
    likePost: async (_, args, context) => {

    }
  }
};

module.exports = resolvers;
