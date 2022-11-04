import { db } from './useFirebase'
import { collection, getDocs, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'

const getAllProducts = () => {
    getDocs(collection(db, 'products'))
}

const productToJson = (product) => {
    let prodJson = "{"
    product.forEach(prodItem => {
        prodJson = prodJson + (prodJson === '{' ? '' : ',')
        switch (typeof prodItem.value) {
            case "number":
                prodJson = prodJson + '"' + prodItem.name + '":' + prodItem.value + ''
                break
            case "boolean":
                prodJson = prodJson + '"' + prodItem.name + '":' + prodItem.value + ''
                break
            case "string":
                prodJson = prodJson + '"' + prodItem.name + '":"' + prodItem.value + '"'
                break
            default:
                prodJson = prodJson + '"' + prodItem.name + '":"' + prodItem.value + '"'
        }
        return prodJson
    })
    prodJson = prodJson + '}'
    return JSON.parse(prodJson)
}

const saveProduct = (newProduct) => {
    const prodJson = productToJson(newProduct)
    addDoc(collection(db, 'products'), prodJson)
}

const updateProduct = async (idProd, product) => {
    const prodJson = productToJson(product)
    await updateDoc(doc(db, 'products', idProd), prodJson)
}

const deleteProduct = async (deleteProd) => {
    await deleteDoc(doc(db, 'products', deleteProd))
}

export { getAllProducts, saveProduct, updateProduct, deleteProduct };