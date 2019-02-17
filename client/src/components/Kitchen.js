import React, { Component } from 'react'
import '../App.css'
import Oven from './Oven'
import Counter from './Counter'
import KitchenButton from './KitchenButton'


class Kitchen extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div>
        <ul id="make">
          <li>
            <span className="bar kitchen-bar"></span><h3>Preparing your Product!</h3></li>
        </ul>
        <div className="workspace">
          <Counter />
          <KitchenButton />
        </div>
      </div>
    )
  }
}

export default Kitchen