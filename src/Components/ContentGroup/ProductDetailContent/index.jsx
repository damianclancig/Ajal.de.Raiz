import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../../../context/AppContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import './ProductDetailContent.scss'

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
            <section className="longDescriptionSection-detailProduct">
                <div className="longDescription-detailProduct">Descripción larga</div>
                {product.brand || product.irrigationType || product.lightType || product.potNumber || product.potType || product.productType || product.weight
                 || product.paymentTypes || product.discount ? 
                <div className="feature">
                    <div>Características:</div>
                    {product.brand ? <div>Dimensiones: {product.brand}</div> : ''}
                    {product.irrigationType ? <div>Tipo de riego: {product.irrigationType}</div> : ''}
                    {product.lightType ? <div>Tipo de luz: {product.lightType}</div> : ''}
                    {product.potNumber ? <div>Número de maceta: {product.potNumber}</div> : ''}
                    {product.potType ? <div>Tipo de maceta: {product.potType}</div> : ''}
                    {product.productType ? <div>Tipo de producto: {product.productType}</div> : ''}
                    {product.weight ? <div>Peso: {product.weight}</div> : ''}
                    {product.paymentTypes ? <div>Tipos de pagos: {product.paymentTypes}</div> : ''}
                    {product.discount ? <div>Descuento: {product.discount}</div> : ''}
                    <div>Last</div>
                </div>
                : '' }
            </section>
        </div>
    )
}

export default ProductDetailContent;