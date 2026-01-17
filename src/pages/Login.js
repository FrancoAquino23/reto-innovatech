import React, { useState } from 'react';

const Login = () => {
  const [datos, setDatos] = useState({ email: '', password: '' });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setError("Formato de correo inválido");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Intento de inicio de sesión con: ${datos.email}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3>Inicio de Sesión</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;