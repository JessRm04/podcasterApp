import React from 'react';
import './header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
       <Link to="/" className="podcast-link">
        <p className='brand'>Podcaster</p>
        </Link>
    </header>
  );
};

export default Header;