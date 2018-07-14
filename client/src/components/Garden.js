import React, { Component } from 'react';
import '../App.css';
import GardenGrid from './GardenGrid';


class Garden extends Component {

  render() {
    return (
      <div className="Garden">
        <div className="grid-container garden-grid">
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default Garden;
