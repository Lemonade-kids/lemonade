import React, { Component } from 'react'
import '../../App.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


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
    const producePicked = 'squash'
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
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/start-over',
                produceProps:{
                  producePicked: producePicked
                }
              }}
            >{'Start Over'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to={{
                pathname: '/garden',
                produceProps:{
                  producePicked: producePicked
                }
              }}
              className="nav-link"
            >Garden
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/store',
                produceProps:{
                  producePicked: producePicked
                }
              }}
            >Supply Store
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/kitchen',
                produceProps:{
                  producePicked: producePicked
                }
              }}
            >Kitchen
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/market',
                produceProps:{
                  producePicked: producePicked
                }
              }}
            >Market
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/help',
                produceProps:{
                  producePicked: producePicked
                }
              }}
            >Help
            </NavLink>
          </li>
        </ul>

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
