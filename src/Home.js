import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


  
        



class Home extends Component {
  render() {
    
    return (
      <div className="Main">>
        <button onClick={shoot}>Pre-Order</button>
        <h1>Sony</h1>

        <img src="https://i.pinimg.com/originals/fb/76/5b/fb765b8752d50de50cfa15203f9a7acd.png"/>
        
       
         </div>

    )
         function shoot() {
          alert("This would take you to the Pre-order Page");
        }
        
        const myelement = (
          <button onClick={shoot}>Take the shot!</button>

        );
        
        
        ReactDOM.render(myelement, document.getElementById('root'));
        

          
      
        
  
        }
      }
 
export default Home;