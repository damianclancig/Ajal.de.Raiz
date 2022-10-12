import React, { useState } from "react";
import { useFirestore } from '../FirestoreConfig/useFirestore';

const AppContext = React.createContext({});

const ContextProvider = ({ children }) => {
    const initialModalState = {
        show: false
    };

    const [productsList, loadProducts, loading] = useFirestore('products');

    const initialValueForm = {
        title: '', title_required: false,
        description: '', description_required: false,
        price: '', price_required: false,
        stock: '', stock_required: false,
        image: '', image_required: false,
    }

    const [productForm, setProductForm] = useState(initialValueForm);

    const [cart, setCart] = useState([]);
    const [isEditProd, setIsEditProd] = useState(false);
    const [file, setFile] = useState('');


    const addToCart = (product) => {
        const productToAdd = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
        }
        const index = cart.findIndex(prod => prod.id === product.id);
        if (index > -1) {
            let newCart = [...cart];
            newCart[index].quantity++;
            setCart(newCart);
        } else {
            setCart([...cart, productToAdd]);
        }
        console.log('Cart: ', cart);
    }

    return (
        <AppContext.Provider value={{
            initialModalState,
            cart, addToCart,
            productsList, loadProducts, loading,
            initialValueForm, productForm, setProductForm,
            isEditProd, setIsEditProd, file, setFile,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, ContextProvider };