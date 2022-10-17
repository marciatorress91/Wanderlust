import './ItemListContainer.css';
import ItemList from "./ItemList"


const ItemListContainer = (props) => {
    return(
        <div className="d-grid gap-2 col-6 mx-auto itemContainer">
            <h1 className='btn btn-lg m-1 mt-3 p-4 saludo'>{props.greeting} <i className="bi bi-airplane-fill avion"></i></h1>
            <ItemList />
        </div>
        )
}

export default ItemListContainer;