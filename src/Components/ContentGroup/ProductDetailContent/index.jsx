import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../../../context/AppContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import './ProductDetailContent.css'

const ProductDetailContent = ({ product }) => {
    const { addToCart } = React.useContext(AppContext);

    return (
        <div className="contentDetailProductParent">
            <section className="imageSection-detailProduct">
                <div className="image-detailProduct">
                    <img className="imageProduct-detailProduct" src={product.image} alt="producto test" />
                </div>
            </section>
            <section className="descriptionSection-detailProduct">
                <div className="description-detailProduct">{product.description}</div>
                <div className="price-detailProduct">
                    <span>Precio: </span>
                    <span><h2>$ {product.price}</h2></span>
                </div>
                <div className="stock-detailProduct">Stock Disponible {product.stock} unidades</div>
                <button className="addCart-detailProduct" onClick={() => addToCart(product)}>Agregar al carrito <FontAwesomeIcon icon={faCartShopping} className="cartIcon" /></button>
            </section>
            <section>
                <div className="longDescription-detailProduct">Descripción larga</div>
                <div className="feature">Características:</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Dimensiones: 10cm X 20cm</div>
                <div>Last</div>
            </section>
        </div>
    )
}

export default ProductDetailContent;