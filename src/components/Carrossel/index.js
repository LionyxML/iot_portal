import React from "react";
import { Carousel } from "react-bootstrap";

const Carrossel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Institudo SENAI de Indaiatuba-SP</h3>
          <p>Especialistas em Energia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
