import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h1> Innovatech </h1>
      <nav>
        <Link to="/inicio" style={{ margin: '0 10px', color: 'white' }}> Inicio </Link>
        <Link to="/login" style={{ margin: '0 10px', color: 'white' }}> Login </Link>
        <Link to="/registro" style={{ margin: '0 10px', color: 'white' }}> Registro </Link>
      </nav>
    </header>
  );
};

export default Header;