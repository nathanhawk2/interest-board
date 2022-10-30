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
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Link style={{marginRight:'8px', color: 'black'}} to="/create">
          Create a Post
        </Link>
        <Link style={{ color: 'black', marginRight: '8px'}} to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button style={{ borderRadius: '8px', width: '50px', backgroundColor: '#5E6973', color: 'white', marginLeft: '3px', padding:'3px'}} onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  // If logged out show login controls
  return (
    <>
    <div className='logIn' style={{display: 'flex', marginRight:'3px'}}>
      <Link style={{marginRight:'3px', color: 'black'}} to="/login">
        Login
      </Link>
      <Link style={{marginLeft:'3px', color: 'black'}} to="/signup">
        Signup
      </Link>
      
      </div>
    </>
  )
}

export default Navbar
