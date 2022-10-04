import { db } from './useFirebase'
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'

const saveProduct = (newProduct) => {
    addDoc(collection(db, 'products'), newProduct)
}

const deleteProduct = async (deleteProd) => {
    console.log("deleteProd: ", deleteProd)
    await deleteDoc(doc(db, 'products', deleteProd))
}

export {saveProduct, deleteProduct};