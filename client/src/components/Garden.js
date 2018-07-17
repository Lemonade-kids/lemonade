import React, { Component } from 'react';
import '../App.css';
import GardenGrid from './GardenGrid';
import Water from '../images/water.png';


class Garden extends Component {

  render() {
    return (
      <div className="Garden">
      <img src={ Water } className="water" alt="water" />
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
