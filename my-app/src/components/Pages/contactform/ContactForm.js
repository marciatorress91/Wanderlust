import { useState } from 'react';
import './ContactForm.css'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {CartContext} from '../../contexts/CartContext'
import { useContext } from "react"
const defaultForm = { name: '', email: '', phone: '' };


const ContactForm =()=>{
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState();
    const {carrito, precioTotal}=useContext(CartContext)
    // { buyer: { name, phone, email }, items: [{id, title, price}], total  }
    
    const order = {
		form,
		items: carrito.map((product) => ({
			id: product.id,
			modelo: product.modelo,
			precio: product.precio,
			cantidad: product.cantidad,
		})),
		preciototal: precioTotal(),
	}; 
        
    const changeHandler = (ev) => {
      setForm({ ...form, [ev.target.name]: ev.target.value });
    };
  
    const submitHandler = (ev) => {
      ev.preventDefault();
      const db = getFirestore();
      const contactFormCollection = collection(db, 'orders');
      addDoc(contactFormCollection, order).then((snapshot) => {
        setId(snapshot.id);
      });
    };
  
    return (
      <div className="container-fluid itemContainer">
        <h2 className="cart">Datos de pago</h2>
        {id ? (
        <div className="p-5">
          <div className="container contenedorGracias" >
            <h3 className="gracias p-5">Gracias por realizar tu compra! <i className="bi bi-airplane-fill avion"></i></h3> 
            <h3 className="gracias pb-5">Tu número de Orden es: {id}</h3>
          </div>
        </div>
        ) : (
          <div className="p-5">
          <form className="container-fluid form p-4" onSubmit={submitHandler}>
            <div>
              <label htmlFor="name" className="texto2">Nombre</label>
              <input
                className="form-control"
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="email" className="texto2">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="phone" className="texto2">Teléfono</label>
              <input
                className="form-control"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="py-4 d-flex justify-content-center">
                <button className="badge fs-6 mx-auto boton3">Finalizar compra</button>
            </div>
            </form>
            </div>
        )}
      </div>
    );
}

export default ContactForm