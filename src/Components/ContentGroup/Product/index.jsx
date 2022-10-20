import React from 'react';
import { AppContext } from '../../../context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Producto = ({ product, handleClickShowProductDetail }) => {
    const { addToCart } = React.useContext(AppContext);

    return (
        <div className='cuadroProducto'>
            <div className="producto" title="Ver producto" onClick={() => handleClickShowProductDetail(product)}>
                <div className='imageProductBox'><img className="imagenProducto" src={product.image} alt="producto test" /></div>
                <div className="">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className='stockPriceProduct'>
                        <div className='stockProduct'>
                            <span>Stock: </span>
                            <span className='stockNumberProduct'>{product.stock}</span>
                        </div>
                        <div className="priceProduct">
                            <span>Precio: </span>
                            <span className='priceNumberProduct'>$ {product.price}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <button className="btnAddCart" onClick={() => addToCart(product)}>Agregar al carrito <FontAwesomeIcon icon={faCartShopping} className="cartIcon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto;