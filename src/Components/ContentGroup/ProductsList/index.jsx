import React from 'react';
import { useFirestore } from '../../../FirestoreConfig/useFirestore';

import Producto from '../Product'

import "./productList.css";

function Content() {
    const [productsList, loading] = useFirestore('products');
    
    return (
        <>
            {loading?<h2>Cargando ...</h2>:''}
            <div className="listaProductos">
                {
                    productsList.map((product, index) => {
                        return <Producto key={'product_'+index} product={product} />
                    })
                }
            </div>
        </>
    )
}

export default Content;