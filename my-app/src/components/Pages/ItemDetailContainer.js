import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import Cargando from '../cargando/Cargando'
const ItemDetailContainer =()=>{
    
    const [item, setItem] = useState(0)
    const { id } = useParams();
    
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
        {!item ?
          <Cargando/>
          :
        <div>
          <ItemDetail item = {item} />
        </div>}
        </div>
      )
}

export default ItemDetailContainer