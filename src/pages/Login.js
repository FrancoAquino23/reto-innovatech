import React, { useState } from 'react';

const Login = () => {
  const [datos, setDatos] = useState({ email: '', password: '' });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    if (name === 'email' && value !== "" && !/\S+@\S+\.\S+/.test(value)) {
      setError("Por favor, ingresa un correo válido.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && datos.email !== "" && datos.password !== "") {
      alert(`Accediendo como: ${datos.email}`);
    } else {
      alert("Revisa los datos ingresados.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}> Iniciar Sesión </h3>
        <p style={styles.subtitle}> Ingresa tus credenciales de Innovatech </p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}> Correo Electrónico </label>
            <input 
              type="email" 
              name="email" 
              placeholder="ejemplo@innovatech.com" 
              onChange={handleChange} 
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}> Contraseña </label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              onChange={handleChange} 
              style={styles.input}
              required
            />
          </div>

          {error && <p style={styles.errorText}>{error}</p>}

          <button type="submit" style={styles.button}>
            Entrar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.8rem',
    color: '#1a1a1a',
    margin: '0 0 10px 0'
  },
  subtitle: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    textAlign: 'left'
  },
  label: {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: '0.8rem',
    margin: '0',
    textAlign: 'left'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  }
};

export default Login;