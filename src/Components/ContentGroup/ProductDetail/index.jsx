import React from 'react';
import ProductDetailContent from '../ProductDetailContent';
import ProductDetailTitle from '../ProductDetailTitle';

import './ProductDetail.scss'

const ProductDetail = ({ handleClickShowProductDetail, classActive, viewProductDetail }) => {
    return (
        <>
            <div className={"glassBackground " + classActive }>
                <ProductDetailTitle handleClickShowProductDetail={handleClickShowProductDetail} title={viewProductDetail.title} />
                <hr className="shine" />
                <ProductDetailContent product={viewProductDetail} />
            </div>
        </>
    )
}

export default ProductDetail;