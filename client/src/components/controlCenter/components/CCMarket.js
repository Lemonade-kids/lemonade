import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class CCMarket extends Component {

  render() {
    return (
      <div>
        {this.props.producePicked ?
          (<div>
            {this.props.showSold ? <p>You sold: {this.props.amountSold}</p> : null}
            {this.props.showCustomersAmount ? <p>You had {this.props.customersAmount} customers!</p> : null }
            {this.props.readyToSell ? null :
              <button className='btn' onClick={this.props.startSelling}>
          Begin selling!
              </button>}
            {this.props.showPlayAgainBtn ?
              <button className='btn' onClick={this.props.playAgain}>
          Play again with {this.props.producePicked}?
              </button> : null}
          </div>) : (<div>
            <button className='btn'>
              <NavLink style={{color: '#000'}} to='/start-over'>Start over?</NavLink>
            </button>
          </div>)}
        {this.props.gameRestarted ? (
          <button className='btn'>
            <NavLink 
              to={{
                pathname: '/garden',
                produceProps:{
                  producePicked: this.props.producePicked,
                  bank: this.props.bank,
                  cropAmount: this.props.cropAmount,
                  temperature: this.props.temperature
                }
              }}
              style={{color: '#000'}}
            >Go to the garden!
            </NavLink>
          </button>) : null}
      </div>
    )
  }
}

CCMarket.propTypes = {
  producePicked: PropTypes.string,
  startSelling: PropTypes.func,
  readyToSell: PropTypes.bool,
  showSold: PropTypes.bool,
  amountSold: PropTypes.number,
  showCustomersAmount: PropTypes.bool,
  customersAmount: PropTypes.number,
  showPlayAgainBtn: PropTypes.bool,
  playAgain: PropTypes.func,
  gameRestarted: PropTypes.bool,
  bank: PropTypes.number,
  cropAmount: PropTypes.number,
  temperature: PropTypes.number
}

export default CCMarket
