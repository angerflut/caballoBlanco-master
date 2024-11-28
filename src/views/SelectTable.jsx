import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import tablesData from '../data/tables'; // Datos simulados de mesas
import './SelectTable.css';

const SelectTable = () => {
  const [tables, setTables] = useState(tablesData);
  const [selectedTable, setSelectedTable] = useState(null);

  // Utiliza useLocation para obtener los datos pasados desde la página anterior (NuevaReserva)
  const location = useLocation();
  const { name, numberOfPeople, startDate } = location.state || {};

  const navigate = useNavigate();

  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };

  const handleProceedToFinalReservation = () => {
    // Redirige a la página de "FinalReserva" pasando los datos de la reserva y la mesa seleccionada
    navigate('/final-reservation', {
      state: { name, numberOfPeople, startDate, selectedTable }
    });
  };

  return (
    <div className="select-table" style={styles.container}>
      <div className="left-space" style={styles.leftSpace}>
        <h2>Mapa del Restaurante</h2>
        <div className="restaurant-map" style={styles.restaurantMap}>
          {tables.map((table) => (
            <div
              key={table.id}
              className={`map-table ${table.status}`}
              style={{
                left: table.mapPosition.left,
                top: table.mapPosition.top,
              }}
              onClick={() => handleSelectTable(table)}
            >
              Mesa {table.number}
            </div>
          ))}
        </div>
      </div>

      <div className="right-space" style={styles.rightSpace}>
        {selectedTable ? (
          <div className="table-info" style={styles.tableInfo}>
            <h3>Detalles de la Mesa {selectedTable.number}</h3>
            <p><strong>Capacidad:</strong> {selectedTable.capacity}</p>
            <p><strong>Estado:</strong> {selectedTable.status}</p>
            <button 
              className="btn btn-primary"
              onClick={handleProceedToFinalReservation}
            >
              Confirmar y Reservar Mesa
            </button>
          </div>
        ) : (
          <p>Seleccione una mesa para ver los detalles</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  leftSpace: {
    flex: 2,
    textAlign: 'center',
  },
  rightSpace: {
    flex: 1,
    paddingLeft: '20px',
  },
  restaurantMap: {
    position: 'relative',
    width: '100%',
    height: '500px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  mapTable: {
    position: 'absolute',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  tableInfo: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
  },
  
};

export default SelectTable;
