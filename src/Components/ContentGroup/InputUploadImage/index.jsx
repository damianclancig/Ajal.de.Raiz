import React, { useState } from 'react'
import { storage } from "../../../FirestoreConfig/useFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppContext } from '../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button';
import Modal from '../Modal';

import { faCloudArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import './InputUploadImage.css'

const InputUploadImage = (idUpload, required) => {

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

	const handleChangeImage = () => {
		let refs = {};
		refs.fileSelector = document.querySelector(`input[name=${idUpload.id}]`);
		document.getElementsByClassName('loadingUpload')[0].classList.remove('noDisplay')
		document.getElementsByClassName('button-upload')[0].classList.add('noDisplay')
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
				fileName = fileName.substring(0, 16)
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
				document.getElementsByClassName('loadingUpload')[0].classList.add('noDisplay')
				document.getElementsByClassName('button-upload')[0].classList.remove('noDisplay')
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
				document.getElementsByClassName('button-upload')[0].classList.add('noDisplay')
			}
		},
			(err) => console.log(err), () => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					let data = [...productForm];
					let index = data.findIndex(obj => obj.name === 'image')
					data[index]["value"] = url;
					data[index]["required"] = !Boolean(url)
					setProductForm(data);
				});
			}
		);
	}

	return (
		<>
			<div className='input-container ic1'>
				<div className='input-file-container'>
					<input type="file" id={idUpload.id} name={idUpload.id} className='input-upload-file-hidden' onChange={handleChangeImage} accept="/image/*" />
					<label htmlFor={idUpload.id} className='input-upload-file textPlaceholder'>{textFileUpload} {required ? '*' : ''}</label>
					<div className='loadingUpload noDisplay'>
						<div className="pulse-container">
							<div className="pulse-bubble pulse-bubble-1"></div>
							<div className="pulse-bubble pulse-bubble-2"></div>
							<div className="pulse-bubble pulse-bubble-3"></div>
						</div>
					</div>
					<Button buttonClass="button-upload noDisplay" buttonIcon={faCloudArrowUp} handleClick={handleUploadImage}>Subir</Button>
				</div>
				<div>
					{percent && percent < 100 ?
						<span className='percentNumber'>{percent}% done</span>
						: ""
					}
					{fileUploaded ?
						<span className='percentNumber fadeOut'>Imagen cargado <FontAwesomeIcon icon={faCheck} className="plus-icon" /></span>
						: ""
					}
				</div>
			</div>
			<Modal show={modalState.show} handleAccept={hideModal}>
				<p>Debe seleccionar una imagen</p>
			</Modal>
		</>
	)
}

export default InputUploadImage