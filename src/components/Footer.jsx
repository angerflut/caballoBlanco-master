import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Contenedor principal */}
      <div style={styles.linksContainer}>
        <a href="/reservations" style={styles.link}>Reservations</a>
        <a href="/new-reservation" style={styles.link}>New Reservation</a>
        <div style={styles.iconContainer}>
          <Icon icon="mdi:silverware-fork-knife" style={styles.icon} />
        </div>
        <a href="/search" style={styles.link}>Search</a>
        <a href="/add-table" style={styles.link}>Add Table</a>
      </div>

      {/* Línea horizontal */}
      <hr style={styles.horizontalLine} />

      {/* Texto de copyright */}
      <div style={styles.textContainer}>
        <p>© Restaurant System, Inc. 2022.</p>
        <p>Made by: Slavyan Hristov</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    marginTop: 'auto', // Esto asegura que el footer se "empuje" al final de la página
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  iconContainer: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '24px',
    color: '#61dafb',
  },
  horizontalLine: {
    borderColor: '#444',
    margin: '20px 0',
  },
  textContainer: {
    fontSize: '12px',
    color: '#aaa',
  },
};

export default Footer;


