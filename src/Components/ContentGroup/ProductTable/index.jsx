import React, { useState } from 'react';
import { useFirestore } from '../../../FirestoreConfig/useFirestore';

import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button';
import InputForm from '../InputForm';
import './ProductTable.css'

const ProductTable = ({ onDelete }) => {
    const [productsList, loading] = useFirestore('products');

    const [searchValue, setSearchValue] = useState('');

    let searchedProducts = [];

    if (!searchValue.length >= 1) {
        searchedProducts = productsList;
    }
    else {
        searchedProducts = productsList.filter(product => {
            const productTitle = product.title.toLowerCase();
            const productDescription = product.description.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return productTitle.includes(searchText) || productDescription.includes(searchText);
        });
    }

    const onSeachValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
            <div className="container">
                {loading ? <h2>Cargando ...</h2> : ''}
                <InputForm id='searchProd' text='Buscar producto' onChange={onSeachValueChange} />
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
                            searchedProducts.map((product, index) => {
                                console.log('product', product)
                                return (
                                    <tr key={'prod_' + index}>
                                        <td>{index}</td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.image}</td>
                                        <td className='lastColumn'>
                                            <Button buttonClass="button-delete" buttonIcon={faTrash} handleClick={onDelete} idProd={product.id} >Eliminar</Button>
                                            <Button buttonClass="button-edit" buttonIcon={faPen} >Editar</Button>
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