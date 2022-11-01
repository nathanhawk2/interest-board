// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import AuthService from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import Posts from '../components/Posts';
import { Grid, Transition, Card } from 'semantic-ui-react';
// import PostCard from '../components/Posts/PostCard';
import PostForm from '../components/Posts/PostForm';
import { FETCH_POSTS_QUERY } from '../utils/queries';
import moment from 'moment';


const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];



  const { loading: postsLoading, data: postsData } = useQuery(FETCH_POSTS_QUERY);




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
  const posts = postsData?.getPosts || [];
  return (
    <main className='col' style={{ margin: '10px', backgroundColor: '' }}>
      <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
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
                {posts.map((post) => (
                  <Card fluid id='card'>
                    <Card.Content>
                      <Card.Header></Card.Header>
                      <Card.Description></Card.Description>
                    {moment(post.createdAt).fromNow(true)}  ago
                      <Card.Meta></Card.Meta>
                    </Card.Content>
                    {post.body}
                  </Card>
                ))};
              </Transition.Group>
            )}
          </Grid.Row>
        </Grid>
      </div>
    </main>
  );
};

export default Home;
