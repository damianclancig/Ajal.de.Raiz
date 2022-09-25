import React, { useState, useEffect } from 'react';
import { db } from '../../../FirestoreConfig'
import { collection, getDocs } from 'firebase/firestore';


function Administration() {
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
            <div className="grid">
                {
                    productsList.map((product) => {
                        return (
                            <div>{product.title}</div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Administration;