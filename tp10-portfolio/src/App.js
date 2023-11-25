import './App.css';
import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/info" element={<Info />} />
            <Route path="/creaciones" element={<Creaciones />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>

  );
}

export default App;
