import React, { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { saveProduct, updateProduct } from '../../../FirestoreConfig/apiFirebase'

import Button from '../Button';
import InputForm from '../InputForm';
import InputUploadImage from '../InputUploadImage';

import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './ProductForm.scss';
import Modal from '../Modal';
import InputCheckboxForm from '../InputCheckboxForm';
// import InputSelectForm from '../InputSelectForm';

const ProductForm = () => {

	const { initialModalState, initialValueForm, loadProducts, productForm, setProductForm,
		isEditProd, setIsEditProd, setFile, setTextFileUpload, initialTextFileUpload, idProd } = useContext(AppContext);

	const [modalState, setModalState] = useState(initialModalState);

	const handleInputChange = (index, event) => {
		let data = [...productForm];
		if (data[index]["type"] === 'checkbox') {
			data[index]["value"] = event.target.checked;
		} else
			data[index]["value"] = event.target.value;

		data[index]["required"] = data[index]["required"] !== undefined ? !event.target.value && !Boolean(event.target.value) : undefined
		setProductForm(data);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const addNewProduct = async () => {
		if (validateForm(productForm)) {
			saveProduct(productForm)
			setProductForm(initialValueForm)
			setFile('');
			loadProducts()
		}
	}

	const onCancel = () => {
		setProductForm(initialValueForm)
		setIsEditProd(false)
		setFile('');
		setTextFileUpload(initialTextFileUpload)
	}

	const onEditProd = () => {
		if (validateForm(productForm)) {
			updateProduct(idProd, productForm).then(() => {
				loadProducts()
			})
			onCancel()
		}
	}

	const validateForm = (product) => {
		let valido = true
		product.forEach((prod) => {
			if (prod.required !== undefined && !prod.value) {
				setModalState({ show: true })
				valido = false
			}
		})
		return valido;
	}

	const onAccept = () => {
		setModalState({ show: false })
	}

	return (
		<>
			<div className='containerForm'>
				<form className='productForm' onSubmit={handleSubmit}>
					<div className="divInputsContainer">
						{
							productForm.map((input, index) => {
								switch (input.type) {
									case "input":
										return <InputForm key={"input_" + index} id={input.name} text={input.text} value={input.value}
											required={input.required !== undefined ? input.required : undefined} onChange={event => handleInputChange(index, event)} />
									case "image":
										return <InputUploadImage key={"input_" + index} id="imageUpload" required={input.required !== undefined ? input.required : undefined} />
									case "checkbox":
										return <InputCheckboxForm key={"input_" + index} id={input.name} text={input.text} value={input.value}
											onChange={event => handleInputChange(index, event)} />
									// case "select":
									// 	return <InputSelectForm />
									default:
										return ''
								}
							})
						}
					</div>

					<div className="buttonFormContent">
						{isEditProd ? (
							<>
								<div className='button-div'>
									<Button buttonClass="button-acceptEdit" buttonIcon={faCheck} handleClick={onEditProd} >Aceptar</Button>
								</div>
								<div className='button-div'>
									<Button buttonClass="button-cancel" buttonIcon={faXmark} handleClick={onCancel} >Cancelar</Button>
								</div>
							</>
						) :
							(
								<div className='button-div'>
									<Button buttonClass="button-add" buttonIcon={faPlus} handleClick={addNewProduct} >Agregar</Button>
								</div>
							)}
					</div>
				</form>
			</div>
			<Modal show={modalState.show} handleAccept={onAccept}>
				<p>Los campos con asteriscos son obligatorios.</p>
			</Modal>
		</>
	)
}

export default ProductForm;