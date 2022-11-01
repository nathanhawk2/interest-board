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

export const CREATE_POST = gql`
  mutation createPost($userId: ID!, $body:String!, $theme: String!) {
    createPost(userId: $userId, body: $body, theme: $theme ) {
      id
      theme
      userId {
        _id
        username
        email
      }
      createdAt
      comments {
        id
        body
        userId
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
    _id
    }
  }
`;
export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId){
    _id
    }
  }
`;

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;