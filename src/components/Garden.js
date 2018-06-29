import React, { Component } from 'react';
import '../App.css';
import GardenGrid from './GardenGrid';


class Garden extends Component {

  render() {
    return (
      <div className="Garden">
        <div className="grid-container">
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
          <div className="grid-item">
            <GardenGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default Garden;
