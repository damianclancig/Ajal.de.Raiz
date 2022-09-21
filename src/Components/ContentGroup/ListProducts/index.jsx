import React, { useState, useEffect } from 'react';
import { db } from '../../../FirestoreConfig'
import { collection, getDocs } from 'firebase/firestore';

import Producto from '../Producto'

import "./Content.css";

function Content() {
    const [productsList, setProductsList] = useState([]);
    
    
    useEffect (() => {
        const productsCollectionRef = collection(db, 'products');
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProductsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
    
        getProducts();
    }, []);

    return (
        <>
            <div className="listaProductos">
                {
                    productsList.map((product) => {
                        return <Producto key={product.id} title={product.title} price={product.price} description={product.description} />
                    })
                }
            </div>
        </>
    )
}

export default Content;