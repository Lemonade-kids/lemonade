import React, { Component } from 'react';
import '../../App.css';
import runningTotal from '../StoreGrid';

class CCStore extends Component {
  render() {
    return (
      <div className="CCStore">
      <p>Shopping Cart: { runningTotal }</p>
        <button className="btn">Buy!</button>
      </div>
    );
  }
}

export default CCStore;