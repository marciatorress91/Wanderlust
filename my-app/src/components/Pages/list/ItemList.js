import Item from './Item'
import { Link } from 'react-router-dom'



const ItemList = ({ tienda = [] }) => {

  
  return (
    tienda.map((ele) => (
        <div className='col'>
          <Link className="" to={`/tienda/${ele.tipo}/${ele.id}`}>
            <Item ele={ele} key={ele.id}/>
          </Link>        
        </div>     
    ))
)}

export default ItemList