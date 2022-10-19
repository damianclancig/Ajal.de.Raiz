import React, { useState, useEffect } from 'react'
import Resizer from 'react-image-file-resizer'

const ImageResize = ({ imageToResize, onImageResized, resizeAspect, resizeQuality }) => {

    const [imageToResizeUri, setImageToResizeUri] = useState();
    const [imageToResizeWidth, setImageToResizeWidth] = useState();
    const [imageToResizeHeight, setImageToResizeHeight] = useState();

    useEffect(() => {
        if (imageToResize) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                setImageToResizeUri(reader.result);
            });

            reader.readAsDataURL(imageToResize);
        }
    }, [imageToResize])

    useEffect(() => {
        if (imageToResize && imageToResizeWidth && imageToResizeHeight) {
            Resizer.imageFileResizer(
                imageToResize,
                imageToResizeWidth * resizeAspect,
                imageToResizeWidth * resizeAspect,
                "JPEG",
                resizeQuality,
                0,
                (uri) => {
                    onImageResized(uri)
                },
                "base64"
            );
        }
    }, [
        imageToResize, imageToResizeWidth, imageToResizeHeight,
        onImageResized, resizeAspect, resizeQuality
    ]);

    return (
        <img alt=''
            src={imageToResizeUri}
            onLoad={(e) => {
                const img = e.target;
                setImageToResizeWidth(img.width);
                setImageToResizeHeight(img.height);
            }}
            crossOrigin="anonymous" // to avoid CORS-related problems
        />
    );
}

ImageResize.defaultProps = {
    onImageResized: () => { },
    resizeAspect: 0.5,
    resizeQuality: 100
}

export default ImageResize
