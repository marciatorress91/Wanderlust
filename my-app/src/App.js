import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './components/navbar/Navbar'
import Home from './components/routes/Home'
import Tienda from './components/routes/Tienda';
import ItemDetailContainer from './components/Pages/ItemDetailContainer'
import Cart from './components/Pages/cart/Cart'
import { CartProvider } from './components/contexts/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/tienda" element={<Home />}></Route>
        <Route exact path='/tienda/:categoria' element={<Tienda />} />
        <Route exact path='/tienda/:categoria/:modelo' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;
