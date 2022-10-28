// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import AuthService from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import Posts from '../components/Posts';
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

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <Posts users={users.post} title="Recent Posts"/>
    }
  }
 

  const renderUsername = () => {
    if (!AuthService.loggedIn()) return null;
    return AuthService.getProfile().data.username;
  }

  function searchF() {
    var input, filter, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <main>
      <input style={{ display: 'flex', borderRadius: '8px', width: '200px', height: '30px'}} type="text" id="searchInput" onKeyUp="searchF()" placeholder="   Search for topics.."></input>
      <button style={{ justifyContent: 'center', backgroundColor: 'black', color: 'white', width: '100px', height: '30px', borderRadius: '8px'}} type="submit">
          Submit
        </button>
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
