import "./Cart.css"
import {CartContext} from '../../contexts/CartContext'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart =()=>{
    const {carrito, vaciarCarrito, precioTotal}=useContext(CartContext)
    
    return (
        <div className="itemContainer">
            <h2 className="cart">Carrito de compras</h2>
        {carrito.length ===0 ?
        <div>
          <p className="cart py-5">No hay Items en el carrito</p>
          <Link className="row justify-content-center py-3" to={`/tienda`}>
                <button className='badge col-7 fs-6 mx-auto boton2'>Seguir comprando</button>
          </Link>
        </div>
          :
          <div className="container itemContainer justify-content-center">
                {carrito.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			    <p className='texto1 pt-5'>Total: $ {precioTotal()}</p>
                <div className="py-4 d-flex justify-content-center">
                    <button onClick={vaciarCarrito} className="badge fs-6 mx-auto boton2">Vaciar carrito</button>
                </div>
            </div>
               
      }
      </div>)
}

export default Cart