import React from "react";

import './ProductDetailTitle.css'
const ProductDetailTitle = ({ handleClickShowProductDetail }) => {

    return (
        <div className="titleDetailProductParent">
            <div className="closeBotton-detailProduct" onClick={handleClickShowProductDetail}>
                {/* <span onClick={handleClickShowProductDetail}>X</span> */}
            </div>
            <div className="titleProduct-detailProduct">
                <h1>Titulo del producto</h1>
            </div>
        </div>
    )
}

export default ProductDetailTitle;