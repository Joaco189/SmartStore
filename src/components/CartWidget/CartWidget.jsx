import cartIcon from "../../images/cart-icon.png"
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div className="cart-icon-container">
            <img className="cart-icon" src={cartIcon} alt="" />
        </div>
    )
}

export default CartWidget