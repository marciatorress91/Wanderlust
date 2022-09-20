import './navbar.css';

import logo from '../assets/logo.png'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src={logo} className="logo" alt="Logo"/></a>
            <button class="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link texto" aria-current="page" href="/"><b>Inicio</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link texto" aria-current="page" href="/Quienessomos"><b>Quiénes somos</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link texto" href="/ItemListContainer"><b>Tienda</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link texto" href="/Contacto"><b>Contacto</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link texto" href="/CartWidget"><b><i class="bi bi-cart-check"></i></b></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;