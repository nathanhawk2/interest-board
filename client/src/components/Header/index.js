import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div style={{display:'flex', justifyContent:'flex-end', margin:'3px'}}>
        <Link to="/" className='homeBtn'>
          <h3 id='home'>Home</h3>
        </Link>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
