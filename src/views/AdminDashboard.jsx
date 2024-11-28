import React, { useState } from 'react';
import Draggable from 'react-draggable';
import tablesData from '../data/tables'; // Datos simulados de mesas

const AdminDashboard = () => {
  const [tables, setTables] = useState(tablesData);
  const [editTable, setEditTable] = useState(null);
  const [newCapacity, setNewCapacity] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleEdit = (table) => {
    setEditTable(table);
    setNewCapacity(table.capacity);
    setNewStatus(table.status);
  };

  const handleSave = () => {
    setTables(
      tables.map((table) =>
        table.id === editTable.id
          ? { ...table, capacity: newCapacity, status: newStatus }
          : table
      )
    );
    setEditTable(null);
    setNewCapacity('');
    setNewStatus('');
  };

  const handleDrag = (e, position, tableId) => {
    const { x, y } = position;
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? { ...table, mapPosition: { left: `${x}px`, top: `${y}px` } }
          : table
      )
    );
  };

  const handleAddTable = () => {
    const newTable = {
      id: Date.now(),
      number: tables.length + 1,
      capacity: 4,
      status: 'available',
      mapPosition: { left: '0px', top: '0px' },
    };
    setTables([...tables, newTable]);
  };

  const handleDeleteTable = (tableId) => {
    setTables(tables.filter((table) => table.id !== tableId));
  };

  return (
    <div style={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">Restaurante Admin</a>
        </div>
      </nav>

      <div className="row" style={styles.row}>
        <div className="col-md-8" style={styles.mapContainer}>
          <h2>Mapa del Restaurante</h2>
          <div style={styles.restaurantMap}>
            {tables.map((table) => (
              <Draggable
                key={table.id}
                defaultPosition={{
                  x: parseInt(table.mapPosition.left),
                  y: parseInt(table.mapPosition.top),
                }}
                onStop={(e, data) => handleDrag(e, data, table.id)}
              >
                <div
                  style={{
                    ...styles.mapTable,
                    backgroundColor: table.status === 'available' ? '#28a745' : '#dc3545',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                  onClick={() => handleEdit(table)}
                >
                  Mesa {table.number}
                </div>
              </Draggable>
            ))}
          </div>
          {editTable && (
            <div style={styles.editForm}>
              <h3>Editar Mesa {editTable.number}</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="mb-3">
                  <label htmlFor="capacity" className="form-label">Capacidad:</label>
                  <input
                    type="number"
                    id="capacity"
                    className="form-control"
                    value={newCapacity}
                    onChange={(e) => setNewCapacity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Estado:</label>
                  <select
                    id="status"
                    className="form-select"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    required
                  >
                    <option value="available">Disponible</option>
                    <option value="reserved">Reservada</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary me-2">Guardar cambios</button>
                <button type="button" className="btn btn-secondary" onClick={() => setEditTable(null)}>
                  Cancelar
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="col-md-4" style={styles.panelContainer}>
          <h1>Panel de Administración</h1>
          <button className="btn btn-primary mb-3" onClick={handleAddTable}>
            Agregar Mesa
          </button>
          {tables.map((table) => (
            <div key={table.id} style={styles.tableItem}>
              <p><strong>Mesa {table.number}</strong></p>
              <p>Capacidad: {table.capacity} personas</p>
              <p>Estado: {table.status}</p>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(table)}>Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTable(table.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Restaurante Admin. Todos los derechos reservados.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  row: {
    display: 'flex',
  },
  mapContainer: {
    flex: 2,
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
    cursor: 'grab',
  },
  tableItem: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  panelContainer: {
    flex: 1,
    paddingLeft: '20px',
  },
  editForm: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  footer: {
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  },
};

export default AdminDashboard;
