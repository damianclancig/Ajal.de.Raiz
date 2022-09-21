import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import imagenProd from '../../../img/productos/monstera.jpg'

import './Producto.css'

const handleDetailProduct = () => {
    alert("detalle");
}

function Producto () {
    return (
        <div className='cuadroProducto'>
            <div className="producto" title="Ver producto" onClick={handleDetailProduct}>
                <span><img className="imagenProducto" src={imagenProd} alt="producto test" /></span>
                <div className="">
                    <span className="nombreProducto" ><h4>Monstera Nro. 6</h4></span>
                    <p>Precio: $ 10</p>
                    <p>Stock: 20</p>
                    <div className="row">
                        <span className="">Ver más</span>
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