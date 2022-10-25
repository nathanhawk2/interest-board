import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1 className='head' style={{display: 'flex', justifyContent: 'flex-start', color: 'black'}}>User List</h1>
        </Link>
      </div>
      <div>
        <p style={{marginTop: '8px'}}>Simple App to View Users.</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
