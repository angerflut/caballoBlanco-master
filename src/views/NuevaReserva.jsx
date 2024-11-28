import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from 'react-router-dom';

const NewReservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  
  // Inicializa useNavigate
  const navigate = useNavigate();

  // Limita las fechas seleccionables (14 días a partir de hoy)
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  // Establece el rango de horas (de 11 AM a 6 PM)
  const minTime = new Date();
  minTime.setHours(11, 0); // 11:00 AM
  const maxTime = new Date();
  maxTime.setHours(18, 0); // 6:00 PM

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${name} el ${startDate.toLocaleString()} para ${numberOfPeople} personas.`);
    
    // Redirige a la página de selección de mesa
    navigate('/select-table');  // Asegúrate de que la ruta sea '/select-table'
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hacer Nueva Reserva</h1>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Campo Nombre */}
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Campo Número de Personas */}
        <div style={styles.inputGroup}>
          <label htmlFor="numberOfPeople" style={styles.label}>Número de Personas:</label>
          <input
            type="number"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            style={styles.input}
            min="1"
            required
          />
        </div>

        {/* Selector de Fecha y Hora */}
        <div style={styles.inputGroup}>
          <label htmlFor="reservationDate" style={styles.label}>Fecha y Hora:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30} // Intervalo de tiempo de 15 minutos
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Hora"
            minDate={minDate} // Fecha mínima (hoy)
            maxDate={maxDate} // Fecha máxima (dentro de 14 días)
            minTime={minTime} // Hora mínima (11:00 AM)
            maxTime={maxTime} // Hora máxima (6:00 PM)
            style={styles.datePicker}
          />
        </div>

        {/* Botón de Enviar */}
        <button type="submit" style={styles.submitButton}>Confirmar Reserva</button>
      </form>

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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  datePicker: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '1000px',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#61dafb',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '15px',
  },
  backLink: {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#61dafb',
    marginTop: '70px',
  },
};

export default NewReservation;
