import React, { Component } from 'react'
import '../../../App.css'
import StoreGrid from './StoreGrid'
import PropTypes from 'prop-types'

class SupplyStore extends Component {
  state = {
    producePicked: ''
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      this.setState({producePicked: crop})
      this.props.grabCrop(crop)
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
  grabCrop: PropTypes.func,
  buyEggs: PropTypes.number || PropTypes.string,
  buyFlour: PropTypes.number || PropTypes.string,
  buyMilk: PropTypes.number || PropTypes.string,
  buySugar: PropTypes.number || PropTypes.string,
  addToCart: PropTypes.func
}

export default SupplyStore
