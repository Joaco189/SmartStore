import "./NavBar.css"
import logo from "../../images/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-item-container">
                <Link className="navbar-item" to="/">Inicio</Link>
                <Link className="navbar-item" to="/productos">Productos</Link>
            </div>
            <Link to="/" className="logo-image-container">
                <img className="logo-image" src={logo} alt="" />
            </Link>
            <div className="navbar-item-container">
                <Link className="navbar-item" to="/contacto">Contacto</Link>
                <Link className="navbar-item" to="/sobreNosotros">Sobre Nosotros</Link>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar