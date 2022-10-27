// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import AuthService from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import { Grid, Transition } from 'semantic-ui-react';
import PostCard from '../components/Posts/PostCard';
import PostForm from '../components/Posts/PostForm';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users" />
    }
  }

  const { posts } = useQuery(FETCH_POSTS_QUERY);
 

  const renderUsername = () => {
    if (!AuthService.loggedIn()) return null;
    return AuthService.getProfile().data.username;
  }

  return (
    <main>
      <div style={{ display: 'flex' }} className='container'>
        {renderUsername()}
      </div>
      <div className='container1' style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '8px', color: 'black' }}>
        {renderUserList()}
      </div>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {users && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    </main>
  );
};

export default Home;
