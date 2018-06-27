import React, { Component } from 'react';
import '../App.css';

class ControlCenter extends Component {
  render() {
    return (
      <div className="Garden">
        <button className="btn">Water</button>
        <button className="btn">Weed</button>

        <p className="ctrl-title">Inventory</p>

        <p className="ctrl-title">Bank</p>

      </div>
    );
  }
}

export default ControlCenter;