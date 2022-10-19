import React from 'react';
import ProductDetailContent from '../ProductDetailContent';
import ProductDetailTitle from '../ProductDetailTitle';

import './ProductDetail.css'

function ProductDetail({ handleClickShowProductDetail }) {
    return (
        <>
            <div className="glassBackground">
                <ProductDetailTitle handleClickShowProductDetail={handleClickShowProductDetail} />
                <hr className="shine" />
                <ProductDetailContent />
            </div>
        </>
    )
}

export default ProductDetail;