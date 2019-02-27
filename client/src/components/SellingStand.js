import React, { Component } from 'react'
import '../App.css'
import People from './People'
import stand from '../images/sellingstand.png'
import cloud from '../images/cloud.png'

class SellingStand extends Component {
  render() {
    return (
      <div className="SellingStand">
        <img src={cloud} alt="cloud" className="cloud" />
        <img src={cloud} alt="cloud" className="cloud-two" />
        <img src={stand} alt="stand" className="stand" />
        <People />
      </div>
    )
  }
}

export default SellingStand
