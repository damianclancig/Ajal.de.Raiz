import React, { useState } from 'react'
import { storage } from "../../../FirestoreConfig/useFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppContext } from '../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button';
import Modal from '../Modal';

import { faCloudArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import './InputUploadImage.css'

const InputUploadImage = (idUpload) => {

	const { productForm, setProductForm, file, setFile, initialModalState, textFileUpload, setTextFileUpload } = React.useContext(AppContext);

	const [blobImage, setBlobImage] = useState(null);
	const [percent, setPercent] = useState(0);
	const [fileUploaded, setFileUploaded] = useState(false);
	const [modalState, setModalState] = useState(initialModalState);

	const showModal = () => {
		setModalState({ show: true });
	};

	const hideModal = () => {
		setModalState({ show: false });
	};

	let refs = {};
	refs.fileSelector = document.querySelector('input[name=fileUploadProduct]');

	const handleChangeImage = () => {
		processFiles(refs.fileSelector.files);
		refs.fileSelector.value = "";
		// setFile(event.target.files[0]);
		// let fileName = event.target.files[0].name;
		// if (fileName.length > 17)
		//     fileName = fileName.substring(0, 17)
		// setTextFileUpload(fileName);
	}

	const processFiles = (files) => {
		for (let file of files) {
			processFile(file);
		}
	}

	const processFile = (file) => {
		if (!file) {
			return;
		}

		// Load the data into an image
		new Promise((resolve, reject) => {
			let rawImage = new Image();

			rawImage.addEventListener("load", () => {
				resolve(rawImage);
			});

			rawImage.src = URL.createObjectURL(file);
			let fileName = file.name;
			setFile(fileName);

			if (fileName.length > 17)
				fileName = fileName.substring(0, 17)
			setTextFileUpload(fileName);
		})
			.then((rawImage) => {
				// Convert image to webp ObjectURL via a canvas blob
				return new Promise((resolve, reject) => {
					let canvas = document.createElement('canvas');
					let ctx = canvas.getContext("2d");

					canvas.width = rawImage.width;
					canvas.height = rawImage.height;
					ctx.drawImage(rawImage, 0, 0);

					canvas.toBlob((blob) => {
						setBlobImage(blob);
						resolve(URL.createObjectURL(blob));
					}, "image/webp");
				});

			})
			.then((imageURL) => {
				// Load image for display on the page
				return new Promise((resolve, reject) => {
					let scaledImg = new Image();

					scaledImg.addEventListener("load", function () {
						resolve({ imageURL, scaledImg });
					});
					scaledImg.setAttribute("src", imageURL);
				});
			})
			.then((data) => {
				console.log("ready upload")
		});
	}

	const handleUploadImage = () => {
		setFileUploaded(false);
		if (!file) {
			showModal();
		}

		const storageRef = ref(storage, `/products/${file}`);

		// progress can be paused and resumed. It also exposes progress updates.
		// Receives the storage reference and the file to upload.
		const uploadTask = uploadBytesResumable(storageRef, blobImage);

		uploadTask.on("state_changed", (snapshot) => {
			const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

			// update progress
			setPercent(percent);
			if (percent === 100) {
				setFileUploaded(true);
			}
		},
			(err) => console.log(err), () => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setProductForm({ ...productForm, 'image': url, 'image_required': !Boolean(url) })
				});
			}
		);
	}

	return (
		<>
			<div className='input-file-container ic1'>
				<input type="file" id={idUpload} name="fileUploadProduct" className='input-upload-file-hidden' onChange={handleChangeImage} accept="/image/*" />
				<label htmlFor={idUpload} className='input-upload-file textPlaceholder'>{textFileUpload}</label>
				<Button buttonClass="button-upload" buttonIcon={faCloudArrowUp} handleClick={handleUploadImage} disabled>Subir</Button>
			</div>
			{percent && percent < 100 ?
				<span className='percentNumber'>{percent}% done</span>
				: ""
			}
			{fileUploaded ?
				<span className='percentNumber fadeOut'>Imagen cargado <FontAwesomeIcon icon={faCheck} className="plus-icon" /></span>
				: ""
			}
			<Modal show={modalState.show} handleAccept={hideModal}>
				<p>Debe seleccionar una imagen</p>
			</Modal>
		</>
	)
}

export default InputUploadImage