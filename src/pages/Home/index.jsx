import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import ImageResize from "../../Components/ContentGroup/ImageResize";
import ImageBlob from '../../Components/ImageBlob';
import useBlobUrl from '../../hooks/useBlobUrl';
import Compress from "react-image-file-resizer";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"

import tienda from '../../img/TiendaAjal.png';
import carouselFoto from '../../img/carousel/carousel1.jpg';
import carouselFoto2 from '../../img/carousel/carousel2.jpg';
import carouselFoto3 from '../../img/carousel/carousel3.jpg';
import carouselFoto4 from '../../img/carousel/carousel4.jpg';

const Home = () => {

    const [imageToResize, setImageToResize] = useState(undefined);
    const [resizedImage, setResizedImage] = useState(undefined);
    // const [blobSrc, setBlobSrc] = useBlobUrl(tienda);


    const newImageCompresed = Compress.imageFileResizer(
        '../../img/TiendaAjal.png', // the file from input
        480, // width
        480, // height
        "JPEG", // compress format WEBP, JPEG, PNG
        70, // quality
        0, // rotation
        (uri) => {
            console.log("tienda: ", tienda, "newImageCompresed: ", newImageCompresed)
            setImageToResize(newImageCompresed);
            console.log(uri);
            // You upload logic goes here
        },
        "base64" // blob or base64 default base64
    );




    return (
        <>
            <Helmet>
                <title>Inicio - Ajal de Raiz</title>
            </Helmet>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} swipeable={false} >
                <div className='carouselItem'>
                    <img src={carouselFoto} alt='Tienda' />
                </div>
                <div className='carouselItem'>
                    <img src={carouselFoto2} alt='Tienda' />
                </div>
                <div className='carouselItem'>
                    <img src={carouselFoto3} alt='Tienda' />
                </div>
                <div className='carouselItem'>
                    <img src={carouselFoto4} alt='Tienda' />
                </div>
            </Carousel>
            <br />
            <div className="panelAcercaDe">
                <p>Nuestra producción está dirigida tanto a profesionales como a particulares, también realizamos trabajos de aplicación en superficies
                    verdes y varios tipos de regalos para fiestas, bodas y otras ocasiones especiales.</p>
                <p>Las plantas fueron y son nuestra fuente de energía, la biofilia que emana a los humanos es increíblemente precioso. Conectar con
                    la naturaleza es importante para nuestro ser.</p>
                <p>Aquí podrás encontrar información para tener tus plantas preciosas. Podrás acceder a la tienda donde encontrarás plantas colgantes,
                    kokedamas, creados con diseños únicos, materiales reciclados con sustrato de calidad aptas para cada una de ellas, también compartiremos
                    ideas para decorar.</p>
                <p>Te invitamos a que ingreses a nuestra tienda para ver todos los productos que podemos ofrecerte, si hay algo que no encontrás lo que quieres,
                    no dudes en contactarnos para poder asesorarte y conseguirte lo que tanto querés.</p>
                <div className="center">
                    <Link to='/tienda'>
                        {/* <div>
                            <ImageResize
                                imageToResize={imageToResize}
                                onImageResized={(resizedImage) => setResizedImage(resizedImage)}
                            />
                        </div>
                        {
                            resizedImage &&
                            <div>
                                <h2>Resized Image</h2>
                                <img
                                    alt="Resize_Image"
                                    src={resizedImage}
                                />
                            </div>
                        } */}
                        {/* <ImageBlob src={tienda} alt="Tienda" /> */}
                        <img src={tienda} alt='Tienda' title='Ingresar a la Tienda' width='500px' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;