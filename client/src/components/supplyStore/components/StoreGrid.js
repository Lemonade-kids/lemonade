import React, { Component } from 'react'
import '../../../App.css'
import Sugar from '../../../images/sugar.png'
import Flour from '../../../images/flour.png'
import Milk from '../../../images/milk.png'
import Eggs from '../../../images/eggs.png'
import PropTypes from 'prop-types'

/** TO DO:
 * validation for numbers only in fields
 * put inputs in state (app.js)
 * func to calculate - redux or app.js state?
 * 
 */

class StoreGrid extends Component {
  render() {
    return (
      <div className="StoreGrid">
        <div className="grid-container-store store-grid">
          <div className="grid-item-store">
            <img src={Sugar} alt="sugar" className="sugar" />
            <h3 className='price'>$6</h3>
            <p>How many cups?</p>
            <input
              className="form-control"
              type="text"
              placeholder="0"
              name='buySugar'
              value={this.props.buySugar}
              onChange={this.props.addToCart} />
          </div>
          <div className="grid-item-store">
            <img src={Flour} alt="flour" className="flour" />
            <h3 className='price'>$3</h3>
            <p>How many pounds?</p>
            <input
              className="form-control"
              type="text"
              placeholder="0"
              name='buyFlour'
              value={this.props.buyFlour}
              onChange={this.props.addToCart} />
          </div>
          <div className="grid-item-store">
            <img src={Milk} alt="milk" className="milk" />
            <h3 className='price'>$4</h3>
            <p>How many pints?</p>
            <input
              className="form-control"
              type="text"
              placeholder="0"
              name='buyMilk'
              value={this.props.buyMilk}
              onChange={this.props.addToCart} />

          </div>
          <div className="grid-item-store">
            <img src={Eggs} alt="eggs" className="eggs" />
            <h3 className='price'>$1</h3>
            <p>How many?</p>
            <input
              className="form-control"
              type="text"
              placeholder="0"
              name='buyEggs'
              value={this.props.buyEggs}
              onChange={this.props.addToCart} />
          </div>
        </div>

      </div>
    )
  }
}

StoreGrid.propTypes = {
  producePicked: PropTypes.string,
  location: PropTypes.object,
  grabCrop: PropTypes.func,
  buyEggs: PropTypes.func,
  buyFlour: PropTypes.func,
  buyMilk: PropTypes.func,
  buySugar: PropTypes.func,
  addToCart: PropTypes.func
}

export default StoreGrid