import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignPage';
import NewReservation from './views/NuevaReserva'; // Nueva vista
import SelectTablePage from './views/SelectTable'; // Página de selección de mesa
import AdminDashboard from './views/AdminDashboard'; // Página de administrador
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const App = () => {
  // Estado para el usuario actual
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar user={currentUser} onLogout={handleLogout} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/new-reservation" element={<NewReservation />} />
            <Route path="/select-table" element={<SelectTablePage />} />

            {/* Ruta protegida para el administrador */}
            <Route
              path="/admin-dashboard"
              element={
                currentUser?.role === "admin" ? (
                  <AdminDashboard />
                ) : (
                  <div>No autorizado</div>
                )
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;
