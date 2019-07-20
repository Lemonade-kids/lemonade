import React, { Component } from 'react'
import '../../../App.css'
import People from './People'
import stand from '../../../images/sellingstand.png'
import cloud from '../../../images/cloud.png'

class SellingStand extends Component {
  state = {
    producePicked: ''
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      this.setState({producePicked: crop})
      this.props.grabCrop(crop)
    }
  }
  render() {
    return (
      <div className='SellingStand'>
        <img src={cloud} alt="cloud" className="cloud" />
        <img src={cloud} alt="cloud" className="cloud-two" />
        <img src={stand} alt="stand" className="stand" />
        <People />
      </div>
    )
  }
}

export default SellingStand
