import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/baner/banner-1.png'
import banner2 from '../../image/baner/banner-2.png'
import banner3 from '../../image/baner/banner-3.png'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Laptop</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>iPhone</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Headphone</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;