import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Games from "./Games";
import Services from "./Services";
import logo from './Sony.PNG'; 


class Main extends Component {
    render() { 
        return (
        <HashRouter>
          <div>
            <h1>Sony</h1>
            <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>>
            <Route path="/games" component={Games}/>
            <Route path="/Services" component={Services}/>
               
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;