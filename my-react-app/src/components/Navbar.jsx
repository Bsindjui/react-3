import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/color-picker">Color Picker</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

