import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <div style={{display:'flex'}}>
        <Link style={{marginRight:'5px'}} to="/create">
          Create a Post
        </Link>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <>
    <div className='logIn' style={{display: 'flex', marginRight:'3px'}}>
      <Link style={{marginRight:'3px'}} to="/login">
        Login
      </Link>
      <Link style={{marginLeft:'3px'}} to="/signup">
        Signup
      </Link>
      
      </div>
    </>
  )
}

export default Navbar
