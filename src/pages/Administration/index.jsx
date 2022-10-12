import React from 'react';
import { Helmet } from 'react-helmet'
import ProductForm from '../../Components/ContentGroup/ProductForm';
import ProductTable from '../../Components/ContentGroup/ProductTable';

function Administration() {

    return (
        <>
            <Helmet>
                <title>Administración - Ajal de Raiz</title>
            </Helmet>
            <ProductForm />
            <ProductTable />
        </>
    )
}

export default Administration;