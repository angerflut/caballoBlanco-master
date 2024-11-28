import React from 'react';
import { useLocation } from 'react-router-dom';

const FinalReservation = () => {
  const location = useLocation();
  const { name, numberOfPeople, startDate, selectedTable } = location.state || {};

  // Convertir startDate a formato legible
  const formattedStartDate = startDate instanceof Date ? startDate.toLocaleDateString() : startDate;

  return (
    <div className="final-reservation">
      <h2>Confirmar Reserva</h2>
      
      <div className="reservation-details">
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Número de personas:</strong> {numberOfPeople}</p>
        <p><strong>Fecha de reserva:</strong> {formattedStartDate}</p>
      </div>

      {selectedTable && (
        <div className="selected-table">
          <h3>Detalles de la Mesa</h3>
          <p><strong>Mesa:</strong> {selectedTable.number}</p>
          <p><strong>Capacidad:</strong> {selectedTable.capacity}</p>
          <p><strong>Estado:</strong> {selectedTable.status}</p>
        </div>
      )}

      <button className="btn btn-primary">Confirmar Reserva</button>
    </div>
  );
};

export default FinalReservation;
