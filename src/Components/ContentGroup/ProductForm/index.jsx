import React, { useState } from 'react';
import { saveProduct } from '../../../FirestoreConfig/apiFirebase'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './ProductForm.css';
import Button from '../Button';
import InputForm from '../InputForm';

const ProductForm = () => {

    const initialValueForm = {
        title: '',
        title_required: false,
        description: '',
        description_required: false,
        price: '',
        price_required: false,
        stock: '',
        stock_required: false,
        image: '',
        image_required: false,
    }

    const [newProdForm, setNewProdForm] = useState(initialValueForm);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProdForm({...newProdForm, [name]: value, [name + '_required']: !Boolean(value)})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewProduct()
    }

    const addNewProduct = () => {
        saveProduct(newProdForm)
        setNewProdForm(initialValueForm)
    }

    return (
        <>
            <div className='containerForm'>
                <form className='productForm' onSubmit={handleSubmit}>
                    <InputForm id="title" text="Titulo" value={newProdForm.title} required={newProdForm.title_required} onChange={handleInputChange} />
                    <InputForm id="description" text="Descripción" value={newProdForm.description} required={newProdForm.description_required} onChange={handleInputChange} />
                    <InputForm id="price" text="Precio" value={newProdForm.price} required={newProdForm.price_required} onChange={handleInputChange} />
                    <InputForm id="stock" text="Stock" value={newProdForm.stock} required={newProdForm.stock_required} onChange={handleInputChange} />
                    <InputForm id="image" text="Imagen" value={newProdForm.image} required={newProdForm.image_required} onChange={handleInputChange} />
                    <div className='button-div'>
                        <Button buttonClass="button-add" buttonIcon={faPlus} >Agregar</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductForm;