import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer =()=>{
    const { categoria, modelo } = useParams()
    return (
        <div>
          <ItemDetail id = {modelo} />
        </div>
      )
}

export default ItemDetailContainer