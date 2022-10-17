import React from 'react';
import {CartContext} from '../../contexts/CartContext';
import { useContext } from "react"
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removerItem } = useContext(CartContext)
    return (
        <div className='container itemCart'>
            <img src={product.foto}/>
            <div>
                <p className='texto1 pt-5'>Item: {product.modelo}</p>
                <p className='texto1'>Cantidad: {product.cantidad}</p>
                <p className='texto1'>Precio: $ {product.precio}</p>
                <p className='texto1'>Subtotal: $ {product.cantidad * product.precio}</p>
                <div className="d-flex justify-content-center">
                    <button onClick={() => removerItem(product.id)} className="botonEliminar"><i className="bi bi-trash3"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart