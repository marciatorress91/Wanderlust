import './App.css';

import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Pages/Inicio'
import Quienessomos from './components/Pages/Quienessomos'
import ItemListContainer from './components/Pages/ItemListContainer'
import Contacto from './components/Pages/Contacto'
import CartWidget from './components/CartWidget/CartWidget'




const App = () => {
  let component
  switch (window.location.pathname){
    case "/":
      component= <Inicio/>
      break
    case "/Quienessomos":
      component= <Quienessomos/>
      break
    case "/ItemListContainer":
      component= <ItemListContainer/>
      break
    case "/Contacto":
      component= <Contacto/>
      break
    case "/CartWidget":
      component= <CartWidget/>
      break
  }
  return (
    <div className="App">
      <Navbar/>
      {component}
    </div>
    
  );
}

export default App;
