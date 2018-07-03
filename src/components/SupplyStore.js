import React, { Component } from 'react';
import '../App.css';
import StoreGrid from './StoreGrid';

class SupplyStore extends Component {
  render() {
    return (
      <div className="SupplyStore">
        <div className="grid-container">
          <div className="grid-item">
            <StoreGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyStore;
