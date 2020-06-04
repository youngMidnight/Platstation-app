import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Button, Dropdown } from 'reactstrap';


  
        



class Home extends Component {
  render() {
  
    return (
      <div className="Main">>
      <header>
      <Button href="https://www.playstation.com/en-us/ps5/">Pre-Order PS5</Button>

      <Button href="https://www.ign.com/games/playstation-5">PS5 NEWS</Button>

      <Button href="https://www.playstation.com/en-us/explore/ps4/?smcid=pdc%3Aen-us%3Aprimary%2520nav%3Amsg-hardware%3Aps4">BUY THE PS4</Button>

      <Button href="https://gear.playstation.com/Main/Default">ACCESSORIES</Button>

     
      
      </header>
     
        
          <img src="https://i.pinimg.com/originals/fb/76/5b/fb765b8752d50de50cfa15203f9a7acd.png"/>

        <div className = "test">    
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
        </div>

   
         </div>

    );
        
        
        ReactDOM.render( document.getElementById('root'));
        

          
      
        
  
        }
      }
 
export default Home;