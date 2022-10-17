import { useState, useEffect } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
import './ItemList.css'
import Cargando from '../cargando/Cargando'

const ItemList = () => {

  const[tienda, setTienda] = useState([])
  
  useEffect(() => {
    fetch("./tienda.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 2s en respuesta
        setTienda(data)
      } ,2000)
    })
  }, [])

  
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {tienda.length == 0 ? 
        <Cargando/>
        : tienda.map((ele) => (
        <div className='col'>
          <Link className="" to={`/tienda/${ele.tipo}/${ele.id}`}>
            <Item ele={ele} key={ele.id}/>
          </Link>        
        </div>     
      ))}
      </div>
    </div>
  )
}

export default ItemList