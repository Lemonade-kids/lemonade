import React, { Component } from 'react';
import '../App.css';
import Oven from './Oven';
import Counter from './Counter';

class Kitchen extends Component {
  render() {
    return (
      <div className="Kitchen">
        <div className="workspace">
        <Oven />
        </div>
      </div>
    );
  }
}

export default Kitchen;