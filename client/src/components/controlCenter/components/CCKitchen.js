import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'

class CCKitchen extends Component {
  render() {
    return (
      <div className="CCKitchen">
        <button 
          className="btn"
          onClick={this.props.showBar}>Bake</button>
      </div>
    )
  }
}

CCKitchen.propTypes = {
  showBar: PropTypes.func
}

export default CCKitchen