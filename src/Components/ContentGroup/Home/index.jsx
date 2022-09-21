import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"

import carouselFoto from '../../../img/carousel/carousel1.jpg';
import carouselFoto2 from '../../../img/carousel/carousel2.jpg';
import carouselFoto3 from '../../../img/carousel/carousel3.jpg';
import carouselFoto4 from '../../../img/carousel/carousel4.jpg';

function Home () {
    return (
        <>
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
            <div>
                <div></div>
            </div>
        </>
    )
}

export default Home;