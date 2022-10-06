import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/HeaderGroup/Header'
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import Administration from './pages/Administration';
import Footer from './Components/FooterGroup'
import ListProducts from './Components/ContentGroup/ProductsList'

import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tienda" element={<ListProducts />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/administracion" element={<Administration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;