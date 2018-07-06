import React, { Component } from 'react';
import '../App.css';

let runningTotal = 10;

class StoreGrid extends Component {
  render() {
    return (
      <div className="StoreGrid">
        <div className="grid-container store-grid">
          <div className="grid-item grid-item-store">
            <p>sugar</p>
            <p>How many cups?</p>
            <input className="form-control" type="text" placeholder="0" />
          </div>
          <div className="grid-item grid-item-store">
            <p>flour</p>
            <p>How many pounds?</p>
            <input className="form-control" type="text" placeholder="0" />
          </div>
          <div className="grid-item grid-item-store">
            <p>milk</p>
            <p>How many pints?</p>
            <input className="form-control" type="text" placeholder="0" />

          </div>
          <div className="grid-item grid-item-store">
            <p>eggs</p>
            <p>How many?</p>
            <input className="form-control" type="text" placeholder="0" />

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