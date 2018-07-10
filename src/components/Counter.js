import React, { Component } from 'react';
import '../App.css';
import CounterPic from '../images/counter.png';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <div className="counter">
        <img src={ CounterPic } alt="counter" className="counter" />
        </div>
      </div>
    );
  }
}

export default Counter;