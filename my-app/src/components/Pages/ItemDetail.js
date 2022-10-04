import { useState, useEffect } from "react"

import React from 'react'
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"
import './ItemDetail.css'

const ItemDetail = () => {
  const { categoria, modelo } = useParams()

  const [stock, setStock] = useState(20)
  const [ele, setEle] = useState(0)

  const modificoStock = (stockInicial, cantidad) => {
    setStock(stockInicial - cantidad)
  }
  
  useEffect(() => {
    fetch("/tienda.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 1s en respuesta
        setEle(data.filter( elem => elem.id == modelo)[0])
      } ,1000)
    })
  }, [])


  return (
    <div className='container-fluid border itemContainer'>
    {ele == 0 ?
      <div className='col mx-auto badge cargando'>CARGANDO...</div>:
      <div className='row row-cols-1 row-cols-xl-2'> 
        <div className='col fotoPrincipal'>
          <img className="img-fluid" src={ele.colores[0]} alt='foto principal del elemento'/>
        </div>
        <div className='col detalles'>
          <div className='row fs-1 text-uppercase fw-bold itemMarca'>{ele.marca}</div>
          <div className='row text-uppercase fw-bold itemModelo'>{ele.modelo}</div>
          <div className='row fs-2 fw-bold itemPrecio'>${ele.precio}</div>
          <hr className="hr"></hr>
          <div className='row justify-content-center'>
            {ele.colores.map((color, index) => (
              <img className="itemColores border m-1 col-2" src={color} key={index} alt='opciones de colores de elemento'/>
            ))}
          </div>
          <hr className="hr"></hr>
          <ItemCount stock = {stock}
                   onAdd = {modificoStock}/>
        </div>
      </div>
    }
    </div>
  )
}

export default ItemDetail