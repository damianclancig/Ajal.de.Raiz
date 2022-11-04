import React, { useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import Producto from '../Product'
import Loading from '../Loading';
import ProductDetail from '../ProductDetail';

import "./productList.scss";

const Content = () => {
    const { productsList } = React.useContext(AppContext);
    const [toggleProductDetail, setToggleProductDetail] = useState(false)
    const [classActive, setClassActive] = useState('')
    const [viewProductDetail, setViewProductDetail] = useState({})

    const handleClickShowProductDetail = (product) => {
        setToggleProductDetail(!toggleProductDetail);
        setClassActive(toggleProductDetail ? '' : 'active')
        setViewProductDetail(product)
    }

    return (
        <>
            <Loading />
            <div className="listaProductos">
                {
                    productsList.map((product, index) => {
                        return <Producto key={'product_' + index} product={product} handleClickShowProductDetail={handleClickShowProductDetail} />
                    })
                }
            </div>
            <ProductDetail handleClickShowProductDetail={handleClickShowProductDetail} classActive={classActive} viewProductDetail={viewProductDetail} />
        </>
    )
}

export default Content;