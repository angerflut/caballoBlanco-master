import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const TableContext = createContext();

// Proveedor del contexto
export const TableProvider = ({ children }) => {
  const [tables, setTables] = useState([
    // Datos iniciales de las mesas
    { id: 1, number: 1, capacity: 4, status: 'available', mapPosition: { left: '10%', top: '20%' } },
    { id: 2, number: 2, capacity: 2, status: 'reserved', mapPosition: { left: '30%', top: '50%' } },
    // Más mesas...
  ]);

  return (
    <TableContext.Provider value={{ tables, setTables }}>
      {children}
    </TableContext.Provider>
  );
};

// Hook para usar el contexto
export const useTables = () => useContext(TableContext);
