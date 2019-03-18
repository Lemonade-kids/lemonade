import React, { Component } from 'react'
import '../../../App.css'
import StoreGrid from './StoreGrid'

class SupplyStore extends Component {
  render() {
    return (
      <div className="SupplyStore">
        <StoreGrid
          buySugar={this.props.buySugar}
          buyFlour={this.props.buyFlour}
          buyMilk={this.props.buyMilk}
          buyEggs={this.props.buyEggs}
          addToCart={this.props.addToCart}
        />
      </div>
    )
  }
}

export default SupplyStore
