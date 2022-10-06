import React, { useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { saveProduct, updateProduct } from '../../../FirestoreConfig/apiFirebase'


import Button from '../Button';
import InputForm from '../InputForm';
import InputUploadImage from '../InputUploadImage';

import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './ProductForm.css';
import Modal from '../Modal';

const ProductForm = () => {

    const { initialModalState, initialValueForm, loadProducts, productForm, setProductForm, isEditProd, setIsEditProd } = React.useContext(AppContext);

    const [modalState, setModalState] = useState(initialModalState);
    const [file, setFile] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductForm({ ...productForm, [name]: value, [name + '_required']: !Boolean(value) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addNewProduct = async () => {
        if (validateForm(productForm)) {
            saveProduct(productForm)
            setProductForm(initialValueForm)
            setFile('');
            loadProducts()
        }
    }

    const onCancel = () => {
        setProductForm(initialValueForm)
        setIsEditProd(false)
    }

    const onEditProd = (product) => {
        if (validateForm(product)) {
            updateProduct(product).then(
                loadProducts()
            )
            onCancel()
        }
    }

    const validateForm = (product) => {
        if (!product.title || !product.description || !product.price || !product.stock || !product.image) {
            setModalState({ show: true })
            return false;
        }
        return true;
    }

    const onAccept = () => {
        setModalState({ show: false })
    }

    return (
        <>
            <div className='containerForm'>
                <form className='productForm' onSubmit={handleSubmit}>
                    <InputForm id="title" text="Titulo" value={productForm.title} required={productForm.title_required} onChange={handleInputChange} />
                    <InputForm id="description" text="Descripción" value={productForm.description} required={productForm.description_required} onChange={handleInputChange} />
                    <InputForm id="price" text="Precio" value={productForm.price} required={productForm.price_required} onChange={handleInputChange} />
                    <InputForm id="stock" text="Stock" value={productForm.stock} required={productForm.stock_required} onChange={handleInputChange} />
                    <InputUploadImage file={file} setFile={setFile} />
                    <div className="buttonFormContent">
                        {isEditProd ? (
                            <>
                                <div className='button-div'>
                                    <Button buttonClass="button-acceptEdit" buttonIcon={faCheck} handleClick={onEditProd} prod={productForm} >Aceptar</Button>
                                </div>
                                <div className='button-div'>
                                    <Button buttonClass="button-cancel" buttonIcon={faXmark} handleClick={onCancel} >Cancelar</Button>
                                </div>
                            </>
                        ) :
                            (
                                <div className='button-div'>
                                    <Button buttonClass="button-add" buttonIcon={faPlus} handleClick={addNewProduct} >Agregar</Button>
                                </div>
                            )}
                    </div>
                </form>
            </div>
            <Modal show={modalState.show} handleAccept={onAccept}>
                <p>Los campos con asteriscos son obligatorios.</p>
            </Modal>
        </>
    )
}

export default ProductForm;