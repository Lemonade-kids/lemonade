import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class CCStore extends Component {
  render() {
    const { runningTotal } = this.props
    return (
      <div className="CCStore">
        <p>Shopping Cart: {runningTotal > 0 ? `$${runningTotal}` : runningTotal}</p>
        <button
          className="btn"
          onClick={this.props.makePurchase}>Buy!
        </button>
        <NavLink to={{
          pathname: '/kitchen',
          produceProps:{
            producePicked: this.props.producePicked,
            bank: this.props.bank,
            cropAmount: this.props.cropAmount,
            temperature: this.props.temperature
          }
        }}>
          <button className='btn'
          >Ready for the kitchen!</button>
        </NavLink>
      </div>
    )
  }
}
CCStore.propTypes = {
  grabTotal: PropTypes.func,
  makePurchase: PropTypes.func,
  runningTotal: PropTypes.number,
  producePicked: PropTypes.string,
  bank: PropTypes.number,
  cropAmount: PropTypes.number,
  temperature: PropTypes.number
}

export default CCStore