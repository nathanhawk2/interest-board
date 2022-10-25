import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1 className='head' style={{display: 'flex', justifyContent: 'flex-start', color: 'black'}}>Home</h1>
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
