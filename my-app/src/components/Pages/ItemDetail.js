import { useState, useEffect, useContext } from "react"
import ItemCount from "./ItemCount"
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import Cargando from '../cargando/Cargando'
import {CartContext} from '../contexts/CartContext'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetail = ({id}) => {

  const {carrito, addItem}=useContext(CartContext)

  const [stock, setStock] = useState(20)
  

  const modificoStock = (stockInicial, cantidad) => {
    setStock(stockInicial - cantidad)
    addItem([item.id, item.modelo, item.precio, cantidad, item.foto])
  }
  
  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemRef = doc(db, 'items', id);
  //   getDoc(itemRef).then((snapshot) =>
  //     setItem({ id: snapshot.id, ...snapshot.data() })
  //   );
  // }, [id]);


// ASI ESTABA ANTES


  useEffect(() => {
    fetch("/tienda.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 1s en respuesta
        setItem(data.filter( elem => elem.id == id)[0])
      } ,2000)
    })
  }, [])


  return (
    <div className='container-fluid border itemContainer'>
      <div className='row row-cols-1 row-cols-xl-2'> 
        <div className='col fotoPrincipal'>
          <img className="img-fluid" src={item.foto} alt='foto del elemento'/>
        </div>
        <div className='col detalles'>
          <div className='row fs-1 text-uppercase fw-bold itemMarca'>{item.marca}</div>
          <div className='row text-uppercase fw-bold itemModelo'>{item.modelo}</div>
          <div className='row fs-2 fw-bold itemPrecio'>${item.precio}</div>
          <hr className="hr"></hr>
          <div className='row justify-content-center'>
            <img className="itemColores border m-1 col-2" src={item.foto} alt='miniatura de foto'/>
          </div>
          <hr className="hr"></hr>
          <div className="container text-center">
            <ItemCount stock = {stock}
                    onAdd = {modificoStock}/>
            <div className='row justify-content-center'>
            <p className='col-7 badge text-end stock'>Stock: {stock}</p>
            </div>
            <Link className="row justify-content-center py-3" to={`/cart`}>
                <button className='badge col-7 fs-6 mx-auto boton2'>Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail