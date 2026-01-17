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
      if (!regexEmail.test(valor)) mensaje = "El formato de correo no es válido.";
    }

    if (nombreCampo === 'password') {
      if (valor.length < 8) mensaje = "La contraseña debe tener al menos 8 caracteres.";
    }

    setErrores(prevErrores => ({
      ...prevErrores,
      [nombreCampo]: mensaje
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setDatos({
      ...datos,
      [name]: value
    });

    validar(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errores).every(x => x === "") && datos.nombre !== "") {
      alert("¡Registro exitoso en Innovatech!");
    } else {
      alert("Por favor, corrige los errores antes de enviar.");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3> Formulario de Registro </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label> Nombre: </label>
          <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} style={{ width: '100%' }} />
          {errores.nombre && <p style={{ color: 'red', fontSize: '12px' }}>{errores.nombre}</p>}
        </div>

        <div>
          <label> Correo Electrónico:</label>
          <input type="email" name="email" value={datos.email} onChange={handleChange} style={{ width: '100%' }} />
          {errores.email && <p style={{ color: 'red', fontSize: '12px' }}>{errores.email}</p>}
        </div>

        <div>
          <label> Contraseña: </label>
          <input type="password" name="password" value={datos.password} onChange={handleChange} style={{ width: '100%' }} />
          {errores.password && <p style={{ color: 'red', fontSize: '12px' }}>{errores.password}</p>}
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;