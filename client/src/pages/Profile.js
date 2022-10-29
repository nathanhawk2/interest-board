// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';



const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter(o => o._id !== user._id);
    return <UserList users={notMeUsers} title="User List" />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <div >
      <ul className='m-3 col' style={{ padding: '6px' ,  listStyle: "none"  }}>
        <li style={{textTransform: 'uppercase'}}>Username: {user.username}</li>
        <li style={{textTransform: 'uppercase'}}>Email: {user.email}</li>
      </ul>
      </div>
    );
  }

  return (
    <div className='m-3'>
      <div className=' container m-3' style={{margin: '5px'}}>
        <h2  className='container ' tyle={{ padding: '5px' }}>
          Viewing {id ? `${user.username}'s` : 'your'} profile
        </h2>
        {renderCurrentUserInfo()}
        <div>
        {renderUserList()}
        </div>
      </div>
      <div className='' style={{}}>
        <h1 className='' style={{ display: 'flex', justifyContent: 'center'}}>Bio</h1>
        <p style={{ display: 'inline-block', justifyContent: 'center', textAlign: 'center', padding: '20px', marginLeft: '500px', marginRight: '500px',  backgroundColor: 'white',borderRadius:'8px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae velit non ligula pretium consequat. Vivamus pretium rutrum tortor, vel consequat nunc maximus sit amet. Ut pharetra rutrum justo, in rhoncus risus aliquam in.</p>
      </div>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', margin:'30px' }}>Recent Posts</h1>
        <div>
{/* post should render here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
