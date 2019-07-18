import React, { Component } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

class StartScreenButtons extends Component {
  goBack = () => {
    window.location.goBack()
  }
  render() {
    return (
      <div className="StartScreenButtons">
        <NavLink to='/'>
          <button 
            className='btn' 
            id="start-over" 
            // onClick={this.props.onClick}
          >
            {'Yes, I\'m sure!'}
          </button>
        </NavLink>
        <button className='btn' id="nevermind" onClick={this.goBack}>Nevermind.</button>
      </div>
    )
  }
}

export default StartScreenButtons