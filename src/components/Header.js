import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/search">Who is Following You</Link>
    </div>
  );
};

export default Header;
