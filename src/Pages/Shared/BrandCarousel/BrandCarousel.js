import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brands/Careem promo code .png';
import Brand2 from '../../../assets/Brands/foot locker.png';


const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={Brand1}
                        alt='first-slide'
                        className='d-block w-100'

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Brand2}
                        alt='second-slide'
                        className='d-block w-100'

                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;