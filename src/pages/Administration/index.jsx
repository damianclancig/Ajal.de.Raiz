import React from 'react';
import ProductForm from '../../Components/ContentGroup/ProductForm';
import ProductTable from '../../Components/ContentGroup/ProductTable';
import { deleteProduct } from '../../FirestoreConfig/apiFirebase'

function Administration() {

    const onDelete = (id) => {
        console.log("delete: ", id)
        deleteProduct(id)
    }

    return (
        <>
            <ProductForm />
            <ProductTable onDelete={onDelete} />
        </>
    )
}

export default Administration;