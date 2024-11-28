import React, { useState } from 'react';
import tablesData from '../data/tables'; // Datos simulados de mesas
import './SelectTable.css';

const SelectTable = () => {
  const [tables, setTables] = useState(tablesData);
  const [selectedTable, setSelectedTable] = useState(null); // Estado para la mesa seleccionada

  // Manejar la selección de una mesa
  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };

  return (
    <div className="select-table">
      {/* Espacio izquierdo para el mapa */}
      <div className="left-space">
        <h2>Mapa del Restaurante</h2>
        <div className="restaurant-map">
          {tables.map((table) => (
            <div
              key={table.id}
              className={`map-table ${table.status}`}
              style={{
                left: table.mapPosition.left,
                top: table.mapPosition.top,
              }}
              onClick={() => handleSelectTable(table)} // Cuando se hace clic, seleccionamos la mesa
            >
              Mesa {table.number}
            </div>
          ))}
        </div>
      </div>

      {/* Espacio derecho para mostrar la información de la mesa seleccionada */}
      <div className="right-space">
        {selectedTable ? (
          <div className="table-info">
            <h3>Información de la Mesa {selectedTable.number}</h3>
            <p><strong>Capacidad:</strong> {selectedTable.capacity} personas</p>
            <p><strong>Estado:</strong> {selectedTable.status === 'available' ? 'Disponible' : 'Reservada'}</p>
            <p><strong>Posición:</strong> ({selectedTable.mapPosition.left}, {selectedTable.mapPosition.top})</p>
          </div>
        ) : (
          <p>Selecciona una mesa para ver su información.</p>
        )}
      </div>
    </div>
  );
};

export default SelectTable;
