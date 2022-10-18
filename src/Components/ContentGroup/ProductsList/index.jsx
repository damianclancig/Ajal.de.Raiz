import React, { useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import Producto from '../Product'
import Loading from '../Loading';
import ProductDetail from '../ProductDetail';

import "./productList.css";

function Content() {
    const { productsList } = React.useContext(AppContext);
    const [toggleProductDetail, setToggleProductDetail] = useState(false)

    const handleClickShowProductDetail = () => {
        setToggleProductDetail(!toggleProductDetail);
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
            {toggleProductDetail ?
                <ProductDetail handleClickShowProductDetail={handleClickShowProductDetail} />
                : ''
            }
        </>
    )
}

export default Content;