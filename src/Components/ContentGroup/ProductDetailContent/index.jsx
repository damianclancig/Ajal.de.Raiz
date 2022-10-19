import React from "react";

import './ProductDetailContent.css'

const ProductDetailContent = () => {

    return (
        <div className="contentDetailProductParent">
            <section className="imageSection-detailProduct">
                <div className="image-detailProduct">Imagen</div>
            </section>
            <section className="descriptionSection-detailProduct">
                <div className="description-detailProduct">Esto es una descripción corta de un producto. contiene una maceta de barro pintado a mano con detalle de oro, es una maceta numero 14, contiene un sustrato de tierra negra, humus, perlitas, vermiculitas.</div>
                <div className="price-detailProduct">$ 100</div>
                <div className="stock-detailProduct">Stock Disponible 5 unidades</div>
                <div className="addCart-detailProduct">Agregar al carrito</div>
            </section>
            <section>
                <div className="longDescription-detailProduct">Descripción larga</div>
            </section>
        </div>
    )
}

export default ProductDetailContent;