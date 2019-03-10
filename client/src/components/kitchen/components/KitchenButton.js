import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'

class KitchenButton extends Component {
  render() {
    return (
      <div className="KitchenButton">
      <button className='btn' id="go-to-market" onClick={this.props.onClick}>Let's go to Market!</button>
      </div>
    )
  }
}

KitchenButton.propTypes = {
  onClick: PropTypes.func
}

export default KitchenButton