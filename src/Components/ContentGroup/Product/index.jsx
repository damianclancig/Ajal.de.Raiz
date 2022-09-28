import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const handleDetailProduct = () => {
    
}
const imagePath = '../../../img/productos/';

function Producto (props) {
    const product = props.product;
    return (
        <div className='cuadroProducto'>
            <div className="producto" title="Ver producto" onClick={handleDetailProduct}>
                <span><img className="imagenProducto" src={imagePath + product.image} alt="producto test" /></span>
                <div className="">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Precio: $ {product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <div className="row">
                        {/* <span className="">Ver más</span> */}
                        <div className="">
                            <button className="btnAddCart">Add <FontAwesomeIcon icon={faCartShopping} className="cartIcon" /></button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Producto;