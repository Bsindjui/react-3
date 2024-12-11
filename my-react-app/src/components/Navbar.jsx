import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '15px',
  },
};

export default Navbar;
