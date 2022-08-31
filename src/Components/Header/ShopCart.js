import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './ShopCart.css'

function ShopCart() {
    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        </div>
    );
  }
  
  export default ShopCart;
  