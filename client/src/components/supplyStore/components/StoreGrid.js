import React, { Component } from 'react'
import '../../../App.css'
import Sugar from '../../../images/sugar.png'
import Flour from '../../../images/flour.png'
import Milk from '../../../images/milk.png'
import Eggs from '../../../images/eggs.png'
import PropTypes from 'prop-types'

class StoreGrid extends Component {
  state = {
    buyEggs: 0,
    buyFlour: 0,
    buyMilk: 0,
    buySugar: 0
  }

  componentDidMount() {
    const newState = {
      buyEggs: 0,
      buyFlour: 0,
      buyMilk: 0,
      buySugar: 0
    }
    const { buyEggs, buyFlour, buyMilk, buySugar } = this.props
    if (buyEggs && buyEggs > 0) {
      newState.buyEggs = buyEggs
    }
    if (buyFlour && buyFlour > 0) {
      newState.buyFlour = buyFlour
    }
    if (buyMilk && buyMilk > 0) {
      newState.buyMilk = buyMilk
    }
    if (buySugar && buySugar > 0) {
      newState.buySugar = buySugar
    }
    this.setState({newState})
  }

  addToCart = (e) => {
    let { buyEggs, buyFlour, buyMilk, buySugar } = this.props
    // regex to accept value only if it is a number
    let value = /^[0-9]+$/.test(e.target.value) ? e.target.value : 0
    if (e.target.name === 'buyEggs') {
      buyEggs = parseInt(value)
    }
    if (e.target.name === 'buyFlour') {
      buyFlour = parseInt(value)
    }
    if (e.target.name === 'buyMilk') {
      buyMilk = parseInt(value)
    }
    if (e.target.name === 'buySugar') {
      buySugar = parseInt(value)
    }
    this.props.addToCart(buyEggs, buyFlour, buyMilk, buySugar)
  }
  render() {
    return (
      <div className="StoreGrid">
        <div className="grid-container-store store-grid">
          <div className="grid-item-store">
            <img src={Sugar} alt="sugar" className="sugar" />
            <h3 className='price'>$6</h3>
            <p>How many cups?</p>
            <input
              type='number'
              className="form-control"
              placeholder="0"
              name='buySugar'
              value={this.props.buySugar}
              onChange={this.addToCart} />
          </div>
          <div className="grid-item-store">
            <img src={Flour} alt="flour" className="flour" />
            <h3 className='price'>$3</h3>
            <p>How many pounds?</p>
            <input
              type='number'
              className="form-control"
              placeholder="0"
              name='buyFlour'
              value={this.props.buyFlour}
              onChange={this.addToCart} />
          </div>
          <div className="grid-item-store">
            <img src={Milk} alt="milk" className="milk" />
            <h3 className='price'>$4</h3>
            <p>How many pints?</p>
            <input
              type='number'
              className="form-control"
              placeholder="0"
              name='buyMilk'
              value={this.props.buyMilk}
              onChange={this.addToCart} />
          </div>
          <div className="grid-item-store">
            <img src={Eggs} alt="eggs" className="eggs" />
            <h3 className='price'>$1</h3>
            <p>How many?</p>
            <input
              type='number'
              className="form-control"
              placeholder="0"
              name='buyEggs'
              value={this.props.buyEggs}
              onChange={this.addToCart} />
          </div>
        </div>
      </div>
    )
  }
}

StoreGrid.propTypes = {
  producePicked: PropTypes.string,
  location: PropTypes.object,
  grabData: PropTypes.func,
  buyEggs: PropTypes.any,
  buyFlour: PropTypes.any,
  buyMilk: PropTypes.any,
  buySugar: PropTypes.any,
  addToCart: PropTypes.func
}

export default StoreGrid