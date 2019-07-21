import React, { Component } from 'react'
import '../../App.css'
// import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class ControlCenter extends Component {
  render() {
    const { producePicked, bank, cropAmount } = this.props
    return (
      <div className="ControlCenter">

        <p className="ctrl-title">Inventory</p>
        {producePicked ? 
          <p>Chosen Produce: {producePicked}</p>
          :null}
        {producePicked ? 
          <p>{producePicked}: {cropAmount ? cropAmount : 0}</p>
          : null}
        {/* <p>Lemons: {this.props.lem}</p>
        <p>Sugar: {this.props.sug } cups</p>
        <p>Product: {this.props.prod} </p> */}

        <div className="dropdown-divider"></div>

        <p className="ctrl-title">Bank: {bank ? 
          `$${bank}` : '$0'}</p>

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
  producePicked: PropTypes.string
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