const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }


  type Post {
    id: ID!
    body: String!
    createdAt: String!
    theme:String
    comments: [Comment]
    likes: [Like]
    likeCount: Int
    commentCount: Int
    userId: User!
  }

  type Comment {
    id: ID!
    createdAt: String!
    userId: ID!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

type Query {
  users: [User]
  user(id: ID!): User
  me: User
  getUsers: [User]
  searchTheme: Post
  getPosts: [Post]
  getPost(postId: ID!): Post
}

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    register(registerInput: RegisterInput): User!
    createPost(userId: ID!, body: String!, theme: String): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!, userId: ID!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;
