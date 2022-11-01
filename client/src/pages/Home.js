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
import { FETCH_POSTS_QUERY } from '../utils/mutations';


const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users:" style={{ display: 'flex', margin: '5px' }} />
    }
  }

  const { posts } = useQuery(FETCH_POSTS_QUERY);
  
  const RenderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <Posts posts={posts} title="Recent Posts" />
    }
  }


  const renderUsername = () => {
    if (!AuthService.loggedIn()) return null;
    return AuthService.getProfile().data.username;
  }

  const search = () => {
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
    <main className='col' style={{ margin: '10px', backgroundColor:'' }}>
      <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
        <input style={{ display: 'flex', borderRadius: '8px', width: '200px', height: '30px', margin: '3px' }} type="text" id="searchInput" placeholder="Search for topics.."></input>
        <button style={{ justifyContent: 'center', backgroundColor: '#6ABEA7', color: 'white', width: '100px', height: '30px', borderRadius: '8px', margin: '2px' }} onClick={search} type="submit">
          Submit
        </button>
      </div>
      <div style={{ display: 'flex', fontFamily: 'Josefin Sans, sansSerif, semiBold', fontSize: '50px', textDecoration: '', textTransform: 'uppercase' }} className='container'>
        {/* {renderUsername()} */}
      </div>
      <div>
        <Grid columns={3} >
          <Grid.Row className="page-title">
            <h1 class="recent">Recent Posts</h1>
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
        {/* {renderPosts()} */}
      </div>
    </main>
  );
};

export default Home;
