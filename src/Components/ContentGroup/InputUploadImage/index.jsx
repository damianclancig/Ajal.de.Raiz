import React, { useState } from 'react'
import { storage } from "../../../FirestoreConfig/useFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppContext } from '../../../context/AppContext';

import Button from '../Button';

import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

const InputUploadImage = (file, setFile) => {

    const { productForm, setProductForm } = React.useContext(AppContext);
    
    const [percent, setPercent] = useState(0);

    const handleChangeImage = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUploadImage = () => {
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
            <div className='input-container ic1'>
                <input type="file" className='input-upload-file' onChange={handleChangeImage} accept="/image/*" />
                <Button buttonClass="button-edit" buttonIcon={faCloudArrowUp} handleClick={handleUploadImage} >Subir</Button>
                <p>{percent} "% done"</p>
            </div>
        </>
    )
}

export default InputUploadImage