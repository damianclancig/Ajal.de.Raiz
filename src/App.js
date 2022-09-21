import React from 'react';
import {
  Routes, 
  Route
} from 'react-router-dom';

import './FirestoreConfig'

import Header from './Components/HeaderGroup/Header'
import ListProducts from './Components/ContentGroup/ListProducts'
import Home from './Components/ContentGroup/Home';
import Footer from './Components/FooterGroup'
import AcercaDe from './Components/ContentGroup/AcercaDe';
import Contacto from './Components/ContentGroup/Contacto';

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;