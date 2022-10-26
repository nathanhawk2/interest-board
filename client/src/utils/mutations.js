import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($id: ID!, $body:String!, $username: String!, $createdAt: String!) {
    createPost(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    addComment(postId: $postId, body: $body) {
      _id
      createdAt
      comments {
        _id
        body
        createdAt
      }
    }
  }
`;
export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $body: String!) {
    deleteComment(postId: $postId, body: $body) {
      _id
      comments {
        _id
        body
      }
    }
  }
`;
export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId){
    }
  }
`;
export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId){
    }
  }
`;
