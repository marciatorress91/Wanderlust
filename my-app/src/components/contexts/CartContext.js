import React, { useState } from 'react'

const CartContext = React.createContext()


const CartProvider = ({ children }) => {
  const[carrito, setCarrito] = useState([])
 


const addItem = (item) => {
    if (isInCart(item[0])) {
        setCarrito(
            carrito.map((product) => {
                return product.id === item[0]
                    ? { ...product, cantidad: product.cantidad + item[3] }
                    : product;
            }),
        );
    } else {
        setCarrito([...carrito, {"id":item[0], "modelo":item[1], "precio":item[2], "cantidad":item[3], "foto": item[4]}]);
    }
    
}



  console.log(carrito) /* BORRAAAAAR */





    const removerItem=(id)=>{
        setCarrito(carrito.filter(ele=>ele.id!==id))
    }

    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const isInCart=(id)=>{
       return carrito.find(ele=>ele.id===id)? true:false
    }

    const totalItems = () =>
		carrito.reduce(
			(acumulador, productoActual) => acumulador + productoActual.cantidad,
			0,
		);
    
    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

  return (
    <CartContext.Provider  value={{carrito, addItem, removerItem, vaciarCarrito, isInCart, totalItems, precioTotal}}>
      {children}
    </CartContext.Provider>
  )
 }

export { CartContext, CartProvider }