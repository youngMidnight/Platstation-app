import React, { Component } from "react";
import Home from "./Home";
import Games from "./Games";
import Services from "./Services";
import logo from './Sony.PNG'; 
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Button } from 'reactstrap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends Component {
    render() { 
        return (
          <HashRouter>  
          <div>
          <ul className="header">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Sony</Navbar.Brand>
            <Nav className="mr-auto">
              <li><Nav.Link href="#Home">Home</Nav.Link> </li>
              <li><Nav.Link href="#Games">Games</Nav.Link></li>
              <li><Nav.Link href="#Services">Services</Nav.Link></li>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Nav>
            </Navbar>
            </ul>
            </div>
            <div className="content">
            <Form inline>
              <Route exact path="/Home" component={Home}/>>
              <Route path="/games" component={Games}/>
              <Route path="/Services" component={Services}/>
              
            </Form>
            
          </div>
          </HashRouter>

        )
    }
  }
export default Main;