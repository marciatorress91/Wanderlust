import { useEffect, useState  } from 'react'
import { useParams, Link } from 'react-router-dom'
import "./Tienda.css"
import Item from '../Pages/list/Item'
import Cargando from '../cargando/Cargando'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const Tienda = () => {
  const { categoria } = useParams()
  const[tienda, setTienda] = useState([])
 

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'items')
    getDocs(itemsCollection).then((snapshot) => {
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTienda(arrproducts)
    })
  }, [])
     


  return (
    <div className='container-fluid itemContainer pb-3'>
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
