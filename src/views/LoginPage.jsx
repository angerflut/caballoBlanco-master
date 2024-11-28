import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate
import users from '../data/users'; // Importamos el archivo de usuarios

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Para manejar errores de login

  const navigate = useNavigate(); // Inicializamos el hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscar el usuario en la lista de usuarios
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      onLogin(user); // Llamamos a onLogin si las credenciales son correctas
      setError(null); // Reseteamos el error si el login es exitoso
      navigate('/'); // Redirigimos al usuario a la página de inicio
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        {error && <div className="mt-3 text-danger">{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
