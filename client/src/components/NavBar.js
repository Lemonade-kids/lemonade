import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    // console.log('from navbar---', this.props.producePicked)
    // console.log('from props.loc in navbar---', this.props)
    const { producePicked } = this.props
    return (
      <div className="navBar">
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

NavBar.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool
}

export default NavBar