import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const FinalReserva = () => {
  const location = useLocation();

  // Recupera la información pasada de la reserva desde la navegación
  const { name, numberOfPeople, startDate } = location.state || {};

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Confirmación de Reserva</h1>
      
      <div style={styles.infoContainer}>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Número de Personas:</strong> {numberOfPeople}</p>
        <p><strong>Fecha y Hora:</strong> {startDate ? new Date(startDate).toLocaleString() : 'No especificada'}</p>
      </div>

      <Link to="/" style={styles.backLink}>Volver al inicio</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '60px auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  infoContainer: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  backLink: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#61dafb',
    marginTop: '30px',
  },
};

export default FinalReserva;
