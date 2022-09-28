import React from 'react';
import { useFirestore } from '../../../FirestoreConfig/useFirestore';

import './ProductTable.css'

function ProductTable () {
    const [productsList, loading] = useFirestore('products');

    return (
        <>
            <div class="container">
                {loading?<h2>Cargando ...</h2>:''}
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Imagen</th>
                            <th className='lastColumn'>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        productsList.map((product, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.image}</td>
                                    <td className='lastColumn'>
                                        <button className="noselect button-delete">
                                            <span className="text">Eliminar</span>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <button className="button-edit">
                                            <span className="text">Editar</span>
                                            <span className="icon">
                                                <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductTable;