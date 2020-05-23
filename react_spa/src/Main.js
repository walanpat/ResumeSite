import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import History from "./History";
  import Symbolism from "./Symbolism";
  import "./index.css";


class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>William "Alan" Patterson II</h1>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/history">History</NavLink></li>
              <li><NavLink to="/contact">Folklore/Symbolism</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/history" component={History}/>
              <Route path="/symbolism" component={Symbolism}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;