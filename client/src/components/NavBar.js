import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    const { producePicked, bank, cropAmount } = this.props
    return (
      <div className="navBar">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/start-over',
                produceProps:{
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount
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

NavBar.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool,
  bank: PropTypes.number,
  cropAmount: PropTypes.number
}

export default NavBar