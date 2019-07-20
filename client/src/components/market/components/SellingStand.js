import React, { Component } from 'react'
import '../../../App.css'
import People from './People'
import stand from '../../../images/sellingstand.png'
import cloud from '../../../images/cloud.png'
import PropTypes from 'prop-types'

class SellingStand extends Component {
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
    return (
      <div className='SellingStand'>
        {this.props.readyToSell ?
          <div>
            <img src={cloud} alt="cloud" className="cloud" />
            <img src={cloud} alt="cloud" className="cloud-two" />
            <img src={stand} alt="stand" className="stand" />
            <People /> 
          </div> : null}
      </div> 
    )
  }
}

SellingStand.propTypes = {
  producePicked: PropTypes.string,
  location: PropTypes.object,
  grabData: PropTypes.func,
  readyToSell: PropTypes.bool
}

export default SellingStand
