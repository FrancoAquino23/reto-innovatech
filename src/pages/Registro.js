import React, { useState } from 'react';

const Registro = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const [errores, setErrores] = useState({});

  const validar = (nombreCampo, valor) => {
    let mensaje = "";

    if (nombreCampo === 'nombre') {
      if (valor.trim() === "") mensaje = "El nombre es obligatorio.";
    }

    if (nombreCampo === 'email') {
      const regexEmail = /\S+@\S+\.\S+/;
      if (valor !== "" && !regexEmail.test(valor)) mensaje = "El formato de correo no es válido.";
    }

    if (nombreCampo === 'password') {
      if (valor !== "" && valor.length < 8) mensaje = "La contraseña debe tener al menos 8 caracteres.";
    }

    setErrores(prevErrores => ({
      ...prevErrores,
      [nombreCampo]: mensaje
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    validar(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errores).every(x => x === "") && datos.nombre !== "" && datos.email !== "" && datos.password !== "") {
      alert("¡Registro exitoso en Innovatech!");
    } else {
      alert("Por favor, completa correctamente todos los campos.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}> Crea tu cuenta </h3>
        <p style={styles.subtitle}> Únete a la plataforma de Innovatech </p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}> Nombre Completo </label>
            <input 
              type="text" 
              name="nombre" 
              value={datos.nombre} 
              placeholder="Tu nombre"
              onChange={handleChange} 
              style={styles.input}
            />
            {errores.nombre && <p style={styles.errorText}>{errores.nombre}</p>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}> Correo Electrónico </label>
            <input 
              type="email" 
              name="email" 
              value={datos.email} 
              placeholder="usuario@correo.com"
              onChange={handleChange} 
              style={styles.input}
            />
            {errores.email && <p style={styles.errorText}>{errores.email}</p>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}> Contraseña </label>
            <input 
              type="password" 
              name="password" 
              value={datos.password} 
              placeholder="Mínimo 8 caracteres"
              onChange={handleChange} 
              style={styles.input}
            />
            {errores.password && <p style={styles.errorText}>{errores.password}</p>}
          </div>

          <button type="submit" style={styles.button}>
            Finalizar Registro
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
    maxWidth: '450px',
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
    gap: '15px'
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
    outline: 'none'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: '0.75rem',
    marginTop: '5px',
    fontWeight: '500'
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
    marginTop: '15px',
    transition: 'background-color 0.3s'
  }
};

export default Registro;