import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'

class CCKitchen extends Component {
  render() {
    return (
      <div className="CCKitchen">
        <button 
          className="btn"
          onClick={this.props.showBar}>
          {this.props.producePicked === 'Lemon' 
            ? 'Prepare the Lemonade!' : this.props.producePicked === 'Blueberry' 
              ? 'Bake the Muffins!' : 'Bake the Squash Bread!'}</button>
      </div>
    )
  }
}

CCKitchen.propTypes = {
  showBar: PropTypes.func,
  producePicked: PropTypes.string
}

export default CCKitchen