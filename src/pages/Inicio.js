import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.heroContainer}>
      <h2 style={styles.title}>
        Bienvenido a <span style={styles.brand}>Innovatech Soluciones</span>
      </h2>
      <p style={styles.subtitle}>
        Líderes en transformación digital y desarrollo de software escalable. 
        Construimos el futuro de tu empresa con tecnología de vanguardia.
      </p>
      <div style={styles.buttonContainer}>
        <button 
          style={styles.primaryBtn} 
          onClick={() => navigate('/login')}
        >
          Iniciar Sesión
        </button>
        <button 
          style={styles.secondaryBtn} 
          onClick={() => navigate('/registro')}
        >
          Crear Cuenta
        </button>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '60px 20px',
  },
  badge: {
    backgroundColor: '#e7f1ff',
    color: '#007bff',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '3rem',
    color: '#1a1a1a',
    marginBottom: '20px',
    maxWidth: '800px',
    lineHeight: '1.2'
  },
  brand: {
    background: 'linear-gradient(to right, #007bff, #00c6ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    lineHeight: '1.6',
    marginBottom: '40px'
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px'
  },
  primaryBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px 35px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
  },
  secondaryBtn: {
    backgroundColor: 'white',
    color: '#1a1a1a',
    border: '2px solid #1a1a1a',
    padding: '15px 35px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s'
  }
};

export default Inicio;