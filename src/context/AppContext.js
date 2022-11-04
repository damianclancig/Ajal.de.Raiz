import React, { useState } from "react";
import { useFirestore } from '../FirestoreConfig/useFirestore';

const AppContext = React.createContext({});

const ContextProvider = ({ children }) => {
    const initialModalState = {
        show: false
    };

    const initialValueForm = [
        { name: 'title', text: 'Título', value: '', required: false, type: 'input'},
        { name: 'description', text: 'Descripción', value: '', required: false, type: 'input'},
        { name: 'price', text: 'Precio', value: '', required: false, type: 'input', format: 'decimal'},
        { name: 'stock', text: 'Stock', value: '', required: false, type: 'input', format: 'number'},
        { name: 'image', text: 'Seleccionar Imagen', value: '', required: false, type: 'image'},
        { name: 'dimensions', text: 'Dimensiones', value: '', type: 'input'},
        { name: 'weight', text: 'Peso', value: '', type: 'input'},
        { name: 'potType', text: 'Tipo de Maceta', value: '', type: 'input'},
        { name: 'potNumber', text: 'Número de Maceta', value: '', type: 'input'},
        { name: 'lightType', text: 'Tipo de luz', value: '', type: 'input'},
        { name: 'irrigationType', text: 'Tipo de riego', value: '', type: 'input'},
        { name: 'productType', text: 'Tipo de producto', value: '', type: 'input'},
        // { name: 'productType', text: 'Tipo de producto', value: '', type: 'select'},
        { name: 'brand', text: 'Marca', value: '', type: 'input'},
        { name: 'discount', text: 'Descuento', value: '', type: 'input', format: 'number'},
        { name: 'paymentTypes', text: 'Formas de pago', value: '', type: 'input'},
        // { name: 'important', text: 'Destacado', value: '', type: 'input'},
        { name: 'important', text: 'Destacado', value: false, type: 'checkbox'},
        { name: 'tags', text: 'Etiquetas', value: '', type: 'input'},
    ]
    const [productForm, setProductForm] = useState(initialValueForm);

    const [productsList, loadProducts, loading] = useFirestore('products');

    const [idProd, setIdProd] = useState(null)

    const initialTextFileUpload = 'Seleccionar Imagen';
    const [file, setFile] = useState('');
    const [textFileUpload, setTextFileUpload] = useState(initialTextFileUpload);
    
    const [isEditProd, setIsEditProd] = useState(false);

    const [cart, setCart] = useState([]);

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
            isEditProd, setIsEditProd, idProd, setIdProd,
            file, setFile, initialTextFileUpload, textFileUpload, setTextFileUpload,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, ContextProvider };