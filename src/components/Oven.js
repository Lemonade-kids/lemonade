import React, { Component } from 'react';
import '../App.css';
import OvenPic from '../images/oven.png';
//import Counter from '../images.counter.png';

class Oven extends Component {
  render() {
    return (
      <div className="Oven">
        <img src={OvenPic} alt="oven" className="oven"/>
      </div>
    );
  }
}

export default Oven;