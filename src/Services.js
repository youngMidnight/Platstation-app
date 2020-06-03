import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'reactstrap';

class Services extends Component {
  render() {
    return (
      <div className="Services">
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.vandal.net/i/1200x630/4-2020/20204291811515_1.jpg"
     
    />
    <Carousel.Caption>
    <Button href="https://my.playstation.com/">View More</Button>
     

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://venturebeat.com/wp-content/uploads/2014/05/ps-plus-games.png?fit=1231%2C619&strip=all" 
      alt="Second slide"
    />

    <Carousel.Caption>
    <Button href="https://my.playstation.com/">View More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://realsport101.com/wp-content/uploads/2020/02/ps-plus-march-2020-free-games-last-chance.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button href="https://my.playstation.com/">View More</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
}
 
export default Services;
