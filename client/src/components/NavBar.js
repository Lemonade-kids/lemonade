import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    const { producePicked, bank, cropAmount, temperature } = this.props
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
                  cropAmount: cropAmount,
                  temperature: temperature
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
                  cropAmount: cropAmount,
                  temperature: temperature
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
                  cropAmount: cropAmount,
                  temperature: temperature
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
                  cropAmount: cropAmount,
                  temperature: temperature
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
                  cropAmount: cropAmount,
                  temperature: temperature
                }
              }}
            >Market
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link"
              to={{
                pathname: '/help',
                produceProps:{
                  producePicked: producePicked,
                  bank: bank,
                  cropAmount: cropAmount,
                  temperature: temperature
                }
              }}
            >Help
            </NavLink>
          </li> */}
          <li className="nav-item">
            <span 
              className={window.location.pathname === '/store' ? 'nav-link ingredients-obvious' : 'nav-link ingredients'} 
              onClick={this.props.openModal}>What ingredients do I need?</span>
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
  cropAmount: PropTypes.number,
  openModal: PropTypes.func,
  temperature: PropTypes.number
}

export default NavBar