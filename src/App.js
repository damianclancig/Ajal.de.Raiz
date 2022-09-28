import React from 'react';
import {
  Routes, 
  Route
} from 'react-router-dom';

import Header from './Components/HeaderGroup/Header'
import Home from './Components/ContentGroup/Home';
import ListProducts from './Components/ContentGroup/ProductsList'
import AcercaDe from './Components/ContentGroup/AcercaDe';
import Contacto from './Components/ContentGroup/Contacto';
import Administration from './Components/ContentGroup/Administration';
import Footer from './Components/FooterGroup'

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