import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './components/navbar/Navbar'
import Home from './components/routes/Home'
import Tienda from './components/routes/Tienda';
import ItemDetailContainer from './components/Pages/detail/ItemDetailContainer'
import Cart from './components/Pages/cart/Cart'
import ContactForm from './components/Pages/contactform/ContactForm'
import { CartProvider } from './components/contexts/CartContext'
import Footer from './components/footer/Footer'

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
        <Route exact path='/contactform' element={<ContactForm />} />
      </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
