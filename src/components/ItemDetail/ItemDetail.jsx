import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
    const priceFormat = parseInt(producto.price).toLocaleString("es-ES", {style:"currency", currency:"ARS"})

    const [qty, setQty] = useState(0);

    const purchase = (quantity) => {
        console.log(quantity);
        setQty(quantity)
    }


    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <div className="item-detail-info">
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                </div>
                <div className="item-detail-image">
                    <img style={{width: "100%"}}src={producto.img} alt="" />
                </div>
                <div className="item-detail-price">
                    <span>{priceFormat}</span>
                </div>
                {qty ? 
                <button className="go-to-cart">Ir al carrito</button> 
                :
                <ItemCount onAdd={purchase} stock={10} initial={1}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail