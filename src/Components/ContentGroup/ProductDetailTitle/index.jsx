import React from "react";

import './ProductDetailTitle.css'

const ProductDetailTitle = ({ handleClickShowProductDetail, title }) => {

    return (
        <div className="titleDetailProductParent">
            <div className="closeBotton-detailProduct" onClick={handleClickShowProductDetail}></div>
            <div className="titleProduct-detailProduct">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default ProductDetailTitle;