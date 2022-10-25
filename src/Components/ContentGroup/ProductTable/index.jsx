import React, { useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { deleteProduct } from '../../../FirestoreConfig/apiFirebase';
import Button from '../Button';
import InputForm from '../InputForm';
import ToolTipImage from '../ToolTipImage';
import Loading from '../Loading';
import Modal from '../Modal';

import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import './ProductTable.scss'

const ProductTable = () => {
    const { initialModalState, initialValueForm, productsList, loadProducts, productForm, setProductForm, setIsEditProd } = React.useContext(AppContext);

    const [modalState, setModalState] = useState(initialModalState);

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

    const showModal = () => {
        setModalState({ show: true });
    };

    const hideModal = () => {
        setModalState({ show: false });
    };

    const onSeachValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const confirmDelete = (product) => {
        setProductForm(product)
        showModal();
    }

    const onDelete = () => {
        deleteProduct(productForm.id)
        hideModal()
        loadProducts()
    }

    const onEdit = (prod) => {
        setIsEditProd(true);
        setProductForm(prod);
    }

    const onCancelDelete = () => {
        setProductForm(initialValueForm);
        hideModal();
    }

    return (
        <>
            <div className="container">
                <Loading />

                {searchedProducts.length === 0 ? 'No hay productos cargados' :
                    <>
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
                                                <td><ToolTipImage product={product} /></td>
                                                <td className='lastColumn'>
                                                    <Button buttonClass="button-delete" buttonIcon={faTrash} handleClick={confirmDelete} prod={product} >Eliminar</Button>
                                                    <Button buttonClass="button-edit" buttonIcon={faPen} handleClick={onEdit} prod={product} >Editar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                }
            </div>
            <Modal show={modalState.show} handleAccept={onDelete} handleClose={onCancelDelete}>
                <p>¿Está seguro que desea eliminar?</p>
            </Modal>
        </>
    )
}

export default ProductTable;