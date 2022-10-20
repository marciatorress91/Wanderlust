import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import Cargando from '../../cargando/Cargando'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemDetailContainer =()=>{
    
    const [item, setItem] = useState(0)
    const {modelo} = useParams();
    
   useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      getDocs(itemsCollection).then((snapshot) =>{
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItem(arrproducts.filter(elem => elem.id == modelo)[0])
    })
}, [])

    return (
      <div className='container-fluid border itemContainer'>
        {!item ?
          <Cargando/>
          :
          <ItemDetail item = {item} />
        }
        </div>
      )
}

export default ItemDetailContainer