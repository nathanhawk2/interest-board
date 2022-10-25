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
      <>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
    <div className='logIn'>
      <Link style={{display: 'flex'}} to="/login">
        Login
      </Link>
      <Link style={{display: 'flex'}} to="/signup">
        Signup
      </Link>
      </div>
    </>
  )
}

export default Navbar
