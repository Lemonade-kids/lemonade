import React, { Component } from 'react';
import '../App.css';
import Oven from './Oven';
import Counter from './Counter';

class Kitchen extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Kitchen">
        <ul id="make">
          <li>
            <span className="bar kitchen-bar"></span><h3>Preparing your Product!</h3></li>
        </ul>
        <div className="workspace">
          <Counter />
        </div>
      </div>
    );
  }
}

export default Kitchen;