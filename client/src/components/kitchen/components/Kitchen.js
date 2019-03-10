import React, { Component } from 'react'
import '../../../App.css'
import Oven from './Oven'
import Counter from './Counter'
import KitchenButton from './KitchenButton'
import PropTypes from 'prop-types'


class Kitchen extends Component {
  render() {
    console.log(this.props.producePicked)
    return (
      <div className='Kitchen'>
        <ul id="make">
          <li>
            <span className="bar kitchen-bar"></span><h3>Preparing your Product!</h3></li>
        </ul>
        <div className="workspace">
          {this.props.producePicked === 'lemon' ? <Counter /> : <Oven />}
          <KitchenButton />
        </div>
      </div>
    )
  }
}

Kitchen.propTypes = {
  producePicked: PropTypes.string
}

export default Kitchen