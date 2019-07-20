import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import StoreGrid from '../StoreGrid';

class CCStore extends Component {
  // runningTotal() {
  //   this.props.grabTotal(this.state.purchase)
  // }
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
            cropAmount: this.props.cropAmount
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
  cropAmount: PropTypes.number
}

export default CCStore