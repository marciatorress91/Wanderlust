import ItemListContainer from '../Pages/ItemListContainer'
import './Home.css'

const Home = () => {
    return(
        <div className='itemContainer'>
            <ItemListContainer greeting="BIENVENIDOS!! Tienen todo lo que necesitan para viajar?"/>
        </div>
        )
}

export default Home;