import React from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../assets/logo.png'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}><img src={logo} alt="logo" width={300}/></Link>
            <button className="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link texto" to={'/'}><b>Inicio</b></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link texto" to={'/tienda/valijas'}><b>Valijas</b></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link texto" to={'/tienda/accesorios'}><b>Accesorios</b></NavLink>
                </li>
                <li className="nav-item texto">
                    <CartWidget/>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;