import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import img1 from "./assets/tls.jpg";
import "./style.css";
import { Button } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
 
class Games extends Component {
  render() {
    return (

          
      <div className="contacts">
      
      <Card className=" card-style2">
    <CardImg src="https://media.playstation.com/is/image/SCEA/the-last-of-us-part-ii-key-art-mobile-01-ps4-us-13aug19?$native_sm_nt$" />
    <CardBody>
      <CardTitle>The Last Of Us Part 2</CardTitle>
      <CardSubtitle>06/19/2020</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button href="https://www.thelastofus.com">View More</Button>
    </CardBody>
  </Card>

  <Card className=" card-style2">
    <CardImg src="https://media.playstation.com/is/image/SCEA/ghost-of-tsushima-box-art-ps4-05feb20-en-us?$native_sm_nt$" />
    <CardBody>
      <CardTitle>Ghost Of Tsushima</CardTitle>
      <CardSubtitle>07/17/2020</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button href="https://www.suckerpunch.com/category/games/ghost-of-tsushima/">View More</Button>
    </CardBody>
  </Card>

  <Card className=" card-style2">
    <CardImg src="https://media.playstation.com/is/image/SCEA/marvels-avengers-boxart-02-ps4-04feb20-en-us?$native_sm_nt$" />
    <CardBody>
      <CardTitle>Marvel's Avengers</CardTitle>
      <CardSubtitle>09/04/2020</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button href="https://avengers.square-enix-games.com/en-us/?">View More</Button>
    </CardBody>
  </Card>

  <Card className=" card-style2">
    <CardImg src="https://media.playstation.com/is/image/SCEA/cyberpunk-2077-box-art-01-ps4-06jun19-en-us?$native_sm_nt$" />
    <CardBody>
      <CardTitle>Cyber Punk 2077</CardTitle>
      <CardSubtitle>09/17/2020</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button href="https://www.thelastofus.com">Link</Button>
    </CardBody>
  </Card>
      </div>
      
      
          
          
    
  )
}
}

export default Games;