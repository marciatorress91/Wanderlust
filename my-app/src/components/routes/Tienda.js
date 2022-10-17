import { useEffect, useState  } from 'react'
import { useParams, Link } from 'react-router-dom'
import "./Tienda.css"
import Item from '../Pages/Item'
import Cargando from '../cargando/Cargando'

const Tienda = () => {
  const { categoria } = useParams()
  const[tienda, setTienda] = useState([])
 
  useEffect(() => {
    fetch("../tienda.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 2s en respuesta
        setTienda(data)
      } ,2000)
    })
  }, [])


  return (
    <div className='container-fluid itemContainer'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {tienda.length == 0 ? 
        <Cargando/>
        // <div className='col mx-auto badge cargando'>CARGANDO...</div>
        : tienda.filter( ele => ele.tipo == categoria).map( elefil => (
        <div className='col'>
          <Link className="" to={`/tienda/${categoria}/${elefil.id}`}>
            <Item ele={elefil} key={elefil.id}/>
          </Link>
        </div>     
      ))}
      </div>
    </div>
  )
}

export default Tienda
