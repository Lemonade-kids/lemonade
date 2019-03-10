import React, { Component } from 'react'
import '../../App.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class ControlCenter extends Component {
  state = {
    user: [
            { login: '' , password : '' },
            { Bank: 123.00, Lemons: 0 },
            { squash:10, blueberries : 0 },
            { products: 100 , gardenGrowth: 0 },
            { flour: 10, sugar: 0 },
            { producePicked: '' }
    ]
  }
  render() {
    return (
      <div className="ControlCenter">

        <p className="ctrl-title">Inventory: </p>
        <p>Chosen Produce: {this.props.producePicked}</p>
        <p>Lemons: {this.props.lem}</p>
        <p>Sugar: {this.props.sug } cups</p>
        <p>Product: {this.props.prod} </p>

        <div className="dropdown-divider"></div>

        <p className="ctrl-title">Bank :${this.props.cash}</p>
        <p></p>
        

      </div>
    )
  }
}

ControlCenter.propTypes = {
  lem: PropTypes.number,
  sug: PropTypes.number,
  prod: PropTypes.number,
  cash: PropTypes.number,
  producePicked: PropTypes.string
}

const mapStateToProps = state => {
  return{
    lem: state.Lemons,
    cash: state.Bank,
    prod: state.product,
    sug: state.sugar,
    producePicked: state.producePicked
  }
}

export default connect(mapStateToProps)(ControlCenter)
