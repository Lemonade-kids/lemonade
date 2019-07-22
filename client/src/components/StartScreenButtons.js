import React, { Component } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

class StartScreenButtons extends Component {
  goBack = () => {
    window.history.back()
  }
  render() {
    // const { producePicked, bank, cropAmount } = this.props
    return (
      <div className="StartScreenButtons">
        <NavLink to={{
          pathname: '/',
          produceProps:{
            producePicked: '',
            bank: 50,
            cropAmount: 0
          }
        }}>
          <button 
            className='btn'>
            {'Yes, I\'m sure!'}
          </button>
        </NavLink>
        <button 
          className='btn' 
          onClick={this.goBack}>
          {'Nevermind.'}
        </button>
      </div>
    )
  }
}

StartScreenButtons.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool,
  bank: PropTypes.number,
  cropAmount: PropTypes.number
}

export default StartScreenButtons