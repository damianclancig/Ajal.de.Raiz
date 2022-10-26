import React from 'react';
import { Helmet } from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.scss"

import tienda from '../../img/TiendaAjal.png';
import carouselFoto from '../../img/carousel/carousel1.jpg';
import carouselFoto2 from '../../img/carousel/carousel2.jpg';
import carouselFoto3 from '../../img/carousel/carousel3.jpg';
import carouselFoto4 from '../../img/carousel/carousel4.jpg';
import { Link } from 'react-router-dom';

function Home() {
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
            <div className="panelHome">
                <p>Nuestra producción está dirigida tanto a profesionales como a particulares, también realizamos trabajos de aplicación en superficies
                    verdes y varios tipos de regalos para fiestas, bodas y otras ocasiones especiales.</p>
                <p>Las plantas fueron y son nuestra fuente de energía, la biofilia que emana a los humanos es increíblemente precioso. Conectar con
                    la naturaleza es importante para nuestro ser.</p>
                <p>Aquí podrás encontrar información para tener tus plantas preciosas. Podrás acceder a la tienda donde encontrarás plantas colgantes,
                    kokedamas, creados con diseños únicos, materiales reciclados con sustrato de calidad aptas para cada una de ellas, también compartiremos
                    ideas para decorar.</p>
                <p>Te invitamos a que ingreses a nuestra tienda para ver todos los productos que podemos ofrecerte, si hay algo que no encontrás lo que quieres,
                    no dudes en contactarnos para poder asesorarte y conseguirte lo que tanto querés.</p>
                    <br />
                <div className="center">
                    <h2>Ingresar a la Tienda</h2>
                    <Link to='/tienda'>
                        <img src={tienda} alt='Tienda' title='Ingresar a la Tienda' className='tiendaImg' width="500" height="auto" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;