import Carousel from 'react-bootstrap/Carousel';

function CarosalComp() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7f98ed6bab6132b3.jpg?q=20"
          alt="Second slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default CarosalComp;