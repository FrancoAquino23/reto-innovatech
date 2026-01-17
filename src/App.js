import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Router> 
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;