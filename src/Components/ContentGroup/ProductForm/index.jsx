import React from 'react';

import './ProductForm.css';

function ProductForm() {

    return (
        <>
            <div className='containerForm'>
                <form className='productForm'>
                    <div className='input-container ic1'>
                        <input id='title' className='input' type='text' placeholder=' ' />
                        <label for="title" className='placeholder'>Titulo</label>
                    </div>
                    <div className='input-container ic1'>
                        <input id='description' className='input' type='text' placeholder=' ' />
                        <label for="description" className='placeholder'>Descripción</label>
                    </div>
                    <div className='input-container ic1'>
                        <input id='price' className='input' type='text' placeholder=' ' />
                        <label for="price" className='placeholder'>Precio</label>
                    </div>
                    <div className='input-container ic1'>
                        <input id='stock' className='input' type='text' placeholder=' ' />
                        <label for="stock" className='placeholder'>Stock</label>
                    </div>
                    <div className='input-container ic1'>
                        <input id='image' className='input' type='text' placeholder=' ' />
                        <label for="image" className='placeholder'>Imagen</label>
                    </div>
                    <button type='submit'>Agregar</button>
                </form>
            </div>
        </>
    )
}

export default ProductForm;