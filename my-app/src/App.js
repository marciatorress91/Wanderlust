import './App.css';

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Pages/ItemListContainer'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="BIENVENIDOS!! Tienen todo lo que necesitan para viajar?"/>
    </div>
    
  );
}

export default App;
