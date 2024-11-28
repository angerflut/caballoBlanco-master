import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
      <div className="container">
        {/* Contenedor del logo */}
        <Link to="/" style={styles.logoLink} className="navbar-brand">
          <img
            src="./images/logo.png" // Ruta al logo
            alt="Logo de MiAplicación"
            style={styles.logo}
          />
          <span style={styles.logoText}>MiAplicación</span>
        </Link>
        <div className="d-flex ms-auto"> {/* Añadido ms-auto para mover los elementos a la derecha */}
          {user ? (
            // Si el usuario está logueado, mostrar el saludo, el botón de admin (si aplica) y el enlace de logout
            <>
              <span style={styles.greeting}>Hola, {user.name}</span>
              {user.role === 'admin' && ( // Verificar si el usuario es administrador
                <Link to="/admindashboard" style={styles.adminButton} className="btn btn-primary me-3">
                  <Icon icon="mdi:shield-account" style={styles.icon} />
                  Admin Dashboard
                </Link>
              )}
              <button className="btn btn-link" onClick={onLogout} style={styles.logoutButton}>
                <Icon icon="mdi:logout" style={styles.icon} />
                Cerrar sesión
              </button>
            </>
          ) : (
            // Si no está logueado, mostrar los enlaces de login y registro
            <>
              <Link to="/login" style={styles.link} className="nav-link me-3"> {/* me-3 añade margen derecho */}
                <Icon icon="mdi:login" style={styles.icon} />
                Iniciar sesión
              </Link>
              <Link to="/register" style={styles.link} className="nav-link">
                <Icon icon="mdi:account-plus" style={styles.icon} />
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#121212',
    color: '#fff',
  },
  logoLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    width: '70px',
    height: '70px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
  },
  logoutButton: {
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  greeting: {
    color: '#61dafb',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '15px',
  },
  adminButton: {
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Navbar;
