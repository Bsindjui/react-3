import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 React Project 2</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '20px',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Footer;
