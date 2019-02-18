import React, { Component } from 'react'
import '../../App.css'
// import StoreGrid from '../StoreGrid';

class CCStore extends Component {
runningTotal() {
      this.props.grabTotal(this.state.purchase)
    }
  render() {
    return (
      <div className="CCStore">
      {/* <p>Shopping Cart: { runningTotal }</p> */}
        <button className="btn">Buy!</button>
      </div>
    )
  }
}

export default CCStore