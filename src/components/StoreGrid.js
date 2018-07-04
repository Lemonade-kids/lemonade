import React, { Component } from 'react';
import '../App.css';

class StoreGrid extends Component {
  render() {
    return (
      <div className="StoreGrid">
        <div className="grid-container store-grid">
          <div className="grid-item grid-item-store">
            <p>sugar</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>flour</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>milk</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>eggs</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>seeds</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>seeds</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>seeds</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>seeds</p>
          </div>
          <div className="grid-item grid-item-store">
            <p>seeds</p>
          </div>
        </div>

      </div>
    );
  }
}

export default StoreGrid;