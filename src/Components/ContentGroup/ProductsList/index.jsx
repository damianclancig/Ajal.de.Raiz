import React from 'react';
import { AppContext } from '../../../context/AppContext';
import Producto from '../Product'
import Loading from '../Loading';

import "./productList.css";

function Content() {
    const { productsList } = React.useContext(AppContext);
    return (
        <>
            <Loading />
            <div className="listaProductos">
                {
                    productsList.map((product, index) => {
                        return <Producto key={'product_' + index} product={product} />
                    })
                }
            </div>
        </>
    )
}

export default Content;