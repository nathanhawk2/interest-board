import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_POST = gql`
  query post {
    post {
      _id
      body
      createdAt
      username
      comments
      likes
      likeCount
      commentCount 
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_COMMENT = gql`
  query comment {
    comment{
    _id
    createdAt
    username
    body
    }
  }
`;

export const QUERY_LIKE = gql`
  query like{
    like{
    _id
    createdAt
    username
    }  
  }
`
export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      userId {
        _id
        username
        email
      }
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        userId
        createdAt
        body
      }
    }
  }
`;