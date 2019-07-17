import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'
// import StoreGrid from '../StoreGrid';

class CCStore extends Component {
  runningTotal() {
    this.props.grabTotal(this.state.purchase)
  }
  render() {
    return (
      <div className="CCStore">
        <p>Shopping Cart: {this.props.runningTotal}</p>
        <button
          className="btn"
          onClick={this.props.makePurchase}>Buy!
        </button>
      </div>
    )
  }
}
CCStore.propTypes = {
  grabTotal: PropTypes.func,
  makePurchase: PropTypes.func,
  runningTotal: PropTypes.number
}

export default CCStore