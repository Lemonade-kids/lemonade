import React, { Component } from 'react'
import '../App.css'

class StartScreenButtons extends Component {
  render() {
    return (
      <div className="StartScreenButtons">
        <button className='btn' id="start-over" onClick={this.props.onClick}>Yes, I'm sure!</button>
        <button className='btn' id="nevermind" onClick={this.props.onClick}>Nevermind.</button>
      </div>
    )
  }
}

export default StartScreenButtons