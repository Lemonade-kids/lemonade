import React, { Component } from 'react';
import '../App.css';
import Stand from '../images/sellingstand.png';
import Cloud from '../images/cloud.png';

class SellingStand extends Component {
  render() {
    return (
      <div className="SellingStand">
        <img src={ Cloud } alt="cloud" className="cloud" />
        <img src={ Stand } alt="stand" className="stand" />

      </div>
    );
  }
}

export default SellingStand;
