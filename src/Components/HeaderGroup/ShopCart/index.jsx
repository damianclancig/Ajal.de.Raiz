import React from 'react';
import { AppContext } from '../../../context/AppContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './ShopCart.css'

function ShopCart() {
    const {cart} = React.useContext(AppContext);
    return (
        <div className="boton carrito">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            {cart.length > 0 ? <div className="cartCounter">{cart.length}</div> : ''}
        </div>
    );
  }
  
  export default ShopCart;
  