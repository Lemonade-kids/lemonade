import React, { Component } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

class StartScreenButtons extends Component {
  goBack = () => {
    window.history.back()
  }
  render() {
    return (
      <div className="StartScreenButtons">
        <NavLink to={{
          pathname: '/',
          produceProps:{
            omg: 'ommmggggg'
          }
        }}>
          <button 
            className='btn'>
            {'Yes, I\'m sure!'}
          </button>
        </NavLink>
        <button className='btn' id="nevermind" onClick={this.goBack}>Nevermind.</button>
      </div>
    )
  }
}

export default StartScreenButtons