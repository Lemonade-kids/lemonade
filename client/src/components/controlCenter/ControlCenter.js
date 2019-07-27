import React, { Component } from 'react'
import '../../App.css'
// import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class ControlCenter extends Component {
  render() {
    const { producePicked, bank, cropAmount, eggs, 
      flour, milk, sugar, product, temperature } = this.props
    return (
      <div className="ControlCenter">

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
        {product ? <p>Product on Hand: {product}</p> : null}
        <div className="dropdown-divider"></div>

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

// const mapStateToProps = state => {
//   return{
//     lem: state.Lemons,
//     cash: state.Bank,
//     prod: state.product,
//     sug: state.sugar,
//     producePicked: state.producePicked
//   }
// }

// export default connect(mapStateToProps)(ControlCenter)

export default ControlCenter