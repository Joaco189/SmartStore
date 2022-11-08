import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
    const priceFormat = parseInt(producto.price).toLocaleString("es-ES", {style:"currency", currency:"ARS"})
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
            </div>
        </div>
    )
}

export default ItemDetail