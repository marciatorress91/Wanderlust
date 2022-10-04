import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Home from './components/routes/Home'
import Tienda from './components/routes/Tienda';
import ItemDetail from './components/Pages/ItemDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/tienda" element={<Home />}></Route>
        <Route exact path='/tienda/:categoria' element={<Tienda />} />
        <Route exact path='/tienda/:categoria/:modelo' element={<ItemDetail />} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
