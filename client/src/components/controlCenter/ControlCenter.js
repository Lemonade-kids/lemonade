import React, { Component } from 'react'
import '../../App.css'
import PropTypes from 'prop-types'


class ControlCenter extends Component {
  render() {
    const { producePicked, bank, cropAmount, eggs, 
      flour, milk, sugar, product, temperature } = this.props
    return (
      <div className="controlCenterContainer">
        <p className="ctrl-title">Inventory</p>
        {producePicked ? 
          <p>Chosen Produce: {producePicked}</p>
          : null}
        {producePicked ? 
          <p>{producePicked}: {cropAmount ? cropAmount : 0}</p>
          : null}
        <p>Supplies</p>
        <div className='inventoryBox'>
          <p>Eggs: {eggs}</p>
          <p>Flour: {flour} cups</p>
          <p>Milk: {milk} cups</p>
          <p>Sugar: {sugar} cups</p>
        </div>
        {producePicked === 'Lemon' ? <p>Product: {product} Lemonade</p> : 
          producePicked === 'Blueberry' ? <p>Product: {product} Blueberry Muffins</p> : 
            producePicked === 'Squash' ? <p>Product: {product} Squash Bread</p> : null}
        <div className="dropdown-divider" />

        <p className="ctrl-title">Bank: {bank ? 
          `$${bank}` : '$0'}</p>
        <p>{`Today's Temp: ${temperature}`}</p>

      </div>
    )
  }
}

ControlCenter.propTypes = {
  sugarTotal: PropTypes.number,
  milkTotal: PropTypes.number,
  flourTotal: PropTypes.number,
  eggTotal: PropTypes.number,
  products: PropTypes.number,
  cropAmount: PropTypes.number,
  bank: PropTypes.number,
  producePicked: PropTypes.string,
  eggs: PropTypes.number,
  flour: PropTypes.number,
  milk: PropTypes.number,
  sugar: PropTypes.number,
  product: PropTypes.number,
  temperature: PropTypes.number
}

export default ControlCenter