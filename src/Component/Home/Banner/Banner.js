import React from 'react';
import { Carousel } from "react-bootstrap";
import image1 from '../../../images/Banner/Banner1.jpg';
import image2 from '../../../images/Banner/Banner2.jpeg';
import image3 from '../../../images/Banner/Banner3.png';
import image4 from '../../../images/Banner/Banner4.jpg';
import image5 from '../../../images/Banner/Banner5.jpeg';

const Banner = () => {
    return (
        <div bg='dark' expand='lg'>
             <Carousel fade >
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image1}
            alt='First slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Second slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image4}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image5}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;