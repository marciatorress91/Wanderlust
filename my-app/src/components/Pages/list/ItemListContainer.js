import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from "./ItemList"
import Cargando from '../../cargando/Cargando'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemListContainer = (props) => {
    
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
         
    
    return(
        <div className="d-grid gap-2 col-6 mx-auto itemContainer pb-3">
            <h1 className='btn btn-lg m-1 mt-3 p-4 saludo'>{props.greeting} <i className="bi bi-airplane-fill avion"></i></h1>
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                    {tienda.length == 0 ? 
                        <Cargando/>
                        : 
                        <ItemList tienda={tienda} />}
                </div>
            </div>
        </div>
        )
}

export default ItemListContainer;