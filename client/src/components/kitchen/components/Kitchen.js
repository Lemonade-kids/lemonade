import React, { Component } from 'react'
import '../../../App.css'
import Oven from './Oven'
import Counter from './Counter'
import KitchenButton from './KitchenButton'
import LoadingBar from './loadingBar'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class Kitchen extends Component {
  state = {
    producePicked: '',
    bank: 0,
    cropAmount: 0
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      const bank = this.props.location.produceProps.bank
      const cropAmount = this.props.location.produceProps.cropAmount
      this.setState({producePicked: crop, bank, cropAmount})
      this.props.grabData(crop, bank, cropAmount)
    }
  }
  render() {
    const { producePicked, bank, cropAmount } = this.state
    return (
      <div className='Kitchen'>
        {this.props.bakeBtn ? <LoadingBar /> : null }
        {this.props.bakeBtn ? 
          <NavLink to={{
            pathname: '/market',
            produceProps:{
              producePicked: producePicked,
              bank: bank,
              cropAmount: cropAmount
            }
          }}>
            <KitchenButton />
          </NavLink> : null }
        <div className="workspace">
          {this.state.producePicked === 'Lemon' ? <Counter /> : <Oven />}
        </div>
      </div>
    )
  }
}

Kitchen.propTypes = {
  bakeBtn: PropTypes.bool,
  producePicked: PropTypes.string,
  goToMarket: PropTypes.bool,
  location: PropTypes.object,
  grabData: PropTypes.func,
  bank: PropTypes.number,
  cropAmount: PropTypes.number
}

export default Kitchen