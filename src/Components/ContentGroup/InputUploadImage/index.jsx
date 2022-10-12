import React, { useState } from 'react'
import { storage } from "../../../FirestoreConfig/useFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppContext } from '../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button';

import { faCloudArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import './InputUploadImage.css'

const InputUploadImage = (idUpload) => {

    const { productForm, setProductForm, file, setFile } = React.useContext(AppContext);

    const [percent, setPercent] = useState(0);
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleChangeImage = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUploadImage = () => {
        setFileUploaded(false);
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/products/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
                if(percent === 100) {
                    setFileUploaded(true);
                }
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setProductForm({ ...productForm, 'image': url, 'image_required': !Boolean(url) })
                });
            }
        );
    };

    return (
        <>
            <div className='input-file-container ic1'>
                <input type="file" id={idUpload} className='input-upload-file-hidden' onChange={handleChangeImage} accept="/image/*" />
                <label htmlFor={idUpload} className='input-upload-file'>Seleccionar Imagen</label>
                <Button buttonClass="button-upload" buttonIcon={faCloudArrowUp} handleClick={handleUploadImage} >Subir</Button>
            </div>
            {percent && percent < 100 ?
                <span className='percentNumber'>{percent}% done</span>
                : ""
            }
            {fileUploaded ?
                <span className='percentNumber fadeOut'>Imagen cargado <FontAwesomeIcon icon={faCheck} className="plus-icon" /></span>
                : ""
            }
        </>
    )
}

export default InputUploadImage