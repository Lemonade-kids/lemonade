import React, { Component } from 'react';
import '../App.css';

const inventory = [2, 6, 8];
let bankAccount = 10.00;

class ControlCenter extends Component {
  render() {
    return (
      <div className="ControlCenter">

        <p className="ctrl-title">Inventory: </p>
        <p>Flour: { inventory[0] } pounds</p>
        <p>Eggs: { inventory[1] }</p>
        <p>Sugar: { inventory[2] } cups</p>

        <div className="dropdown-divider"></div>

        <p className="ctrl-title">Bank</p>
        <p>${ bankAccount }</p>

      </div>
    );
  }
}

export default ControlCenter;