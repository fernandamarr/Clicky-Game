import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
  return (
  <div>
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="http://www.fernandamarroquin.com/Clicky-Game/">Super Mario Clicky Game</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <div id="description">{props.children}</div>
        </li>
      </ul>
      <span className="navbar-text">
        Score: {props.score} 
        <br></br>
        Highscore: {props.topscore}
      </span>
    </nav> 
    <header>
      <h1>Clicky Game</h1>
      <h3>Click on an image to earn points, but don't click on any more than once!</h3>
    </header>   
    </div>
  );
}

export default Navbar;