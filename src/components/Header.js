import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.navBar}>
      <Link to="/inicio" style={styles.logoLink}>
        <div style={styles.logo}>
          Innovatech <span style={{color: '#007bff'}}> Soluciones </span>
        </div>
      </Link>
      <nav>
        <Link to="/inicio" style={styles.link}> Inicio </Link>
      </nav>
    </header>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8%',
    height: '80px',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '2px solid #007bff'
  },
  logoLink: {
    textDecoration: 'none'
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '0.5px'
  },
  link: {
    textDecoration: 'none',
    color: '#e0e0e0',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background 0.3s'
  }
};

export default Header;