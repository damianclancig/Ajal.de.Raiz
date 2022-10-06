import { db } from './useFirebase'
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'

const getAllProducts = () => {
    getDocs(collection(db, 'products'))
}

const saveProduct = (newProduct) => {
    addDoc(collection(db, 'products'), newProduct)
}

const updateProduct = async (product) => {
    await updateDoc(doc(db, 'products', product.id), product)
}

const deleteProduct = async (deleteProd) => {
    await deleteDoc(doc(db, 'products', deleteProd))
}

export { getAllProducts, saveProduct, updateProduct, deleteProduct };