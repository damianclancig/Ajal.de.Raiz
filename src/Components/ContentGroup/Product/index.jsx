import React from 'react';
import { AppContext } from '../../../context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

function Producto ({product, handleClickShowProductDetail}) {
    const {addToCart} = React.useContext(AppContext);

    return (
        <div className='cuadroProducto'>
            <div className="producto" title="Ver producto" onClick={handleClickShowProductDetail}>
                <span><img className="imagenProducto" src={product.image} alt="producto test" /></span>
                <div className="">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Precio: $ {product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <div className="row">
                        {/* <span className="">Ver más</span> */}
                        <div className="">
                            <button className="btnAddCart" onClick={() =>addToCart(product)}>Add <FontAwesomeIcon icon={faCartShopping} className="cartIcon" /></button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Producto;