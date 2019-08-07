import React, { Component } from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'


class CCMarket extends Component {

  render() {
    return (
      <div>
        {this.props.showSold ? <p>You sold: {this.props.amountSold}</p> : null}
        {this.props.showCustomersAmount ? <p>You had {this.props.customersAmount} customers!</p> : null }
        {this.props.readyToSell ? null :
          <button className='btn' onClick={this.props.startSelling}>
          Begin!
          </button>}
        {this.props.showPlayAgainBtn ?
          <button className='btn' onClick={this.props.playAgain}>
          Play again?
          </button> : null}
      </div>
    )
  }
}

CCMarket.propTypes = {
  lem: PropTypes.number,
  sug: PropTypes.number,
  prod: PropTypes.number,
  cash: PropTypes.number,
  producePicked: PropTypes.string,
  startSelling: PropTypes.func,
  readyToSell: PropTypes.bool,
  showSold: PropTypes.bool,
  amountSold: PropTypes.number,
  showCustomersAmount: PropTypes.bool,
  customersAmount: PropTypes.number,
  showPlayAgainBtn: PropTypes.bool,
  playAgain: PropTypes.func
}

export default CCMarket
