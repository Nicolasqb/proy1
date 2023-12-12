import React from 'react';
import { Carousel } from 'react-bootstrap';
import adaLovelaceImage from '../assets/img/ada.jpg';
import graceHopperImage from '../assets/img/grace.jpg';
import dennisRitchieImage from '../assets/img/denis.jpg';
import foto1 from '../assets/img/biigaes.jpg';
import foto2 from '../assets/img/tim.jpg';
import foto3 from '../assets/img/guido.jpg';
import foto4 from '../assets/img/linus.jpg';

const MyCarousel = () => {
  return (
    <Carousel className="w-50 mx-auto">
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={adaLovelaceImage}
          alt="Ada Lovelace"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={graceHopperImage}
          alt="Grace Hopper"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={dennisRitchieImage}
          alt="Dennis Ritchie"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={foto1}
          alt="Dennis Ritchie"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={foto2}
          alt="Dennis Ritchie"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={foto3}
          alt="Dennis Ritchie"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={foto4}
          alt="Dennis Ritchie"
          style={{ width: '100px', height: '300px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
