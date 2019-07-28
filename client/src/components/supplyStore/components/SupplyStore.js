import React, { Component } from 'react'
import '../../../App.css'
import StoreGrid from './StoreGrid'
import PropTypes from 'prop-types'

class SupplyStore extends Component {
  state = {
    producePicked: '',
    bank: 0,
    cropAmount: 0,
    temperature: 0
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      const bank = this.props.location.produceProps.bank
      const cropAmount = this.props.location.produceProps.cropAmount
      const temperature = this.props.location.produceProps.temperature
      this.setState({producePicked: crop, bank, cropAmount, temperature})
      this.props.grabData(crop, bank, cropAmount, temperature)
    }
  }
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

SupplyStore.propTypes = {
  producePicked: PropTypes.string,
  location: PropTypes.object,
  grabData: PropTypes.func,
  buyEggs: PropTypes.any,
  buyFlour: PropTypes.any,
  buyMilk: PropTypes.any,
  buySugar: PropTypes.any,
  addToCart: PropTypes.func
}

export default SupplyStore
