import React, { Component } from 'react';
import '../App.css';
import GardenGrid from './GardenGrid';


class Garden extends Component {

  

  tendGarden = (event) => {
    let id = event.target.dataset.valuename

  }

  render() {
    return (
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
    );
  }
}

export default Garden;
