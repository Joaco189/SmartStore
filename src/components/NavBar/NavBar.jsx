import "./NavBar.css"
import logo from "../../images/logo.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-item-container">
                <a className="navbar-item" href="#inicio">Inicio</a>
                <a className="navbar-item" href="#productos">Productos</a>
            </div>
            <div className="logo-image-container">
                <img className="logo-image" src={logo} alt="" />
            </div>
            <div className="navbar-item-container">
                <a className="navbar-item" href="#contacto">Contacto</a>
                <a className="navbar-item" href="#sobreNosotros">Sobre Nosotros</a>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar