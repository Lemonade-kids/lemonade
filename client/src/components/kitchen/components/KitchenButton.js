import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../App.css'

class KitchenButton extends Component {
  render() {
    return (
      <div className="KitchenButton">
        <NavLink to={'/market'}>
          <button
            className='btn'
            id="go-to-market">Let's go to Market!</button>
        </NavLink>
      </div>
    )
  }
}

export default KitchenButton