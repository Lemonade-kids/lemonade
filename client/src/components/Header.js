import React, { Component } from 'react'
import '../App.css'
import NavBar from './NavBar'
import Rooster from '../images/rooster.png'
import PropTypes from 'prop-types'

class Header extends Component {
//   goBack = () => {
//     window.history.back()
//   }
  render() {
    const { producePicked } = this.props
    console.log(this.props)
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">
            <img src={Rooster}
              alt="rooster logo"
              width="70px"
              className="rooster" />CFK Market Stand</h1>
        </header>
        <NavBar producePicked={producePicked} />
      </div>
    )
  }
}

Header.propTypes = {
  producePicked: PropTypes.string
}

export default Header