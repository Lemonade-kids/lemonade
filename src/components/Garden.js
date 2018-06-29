import React, { Component } from 'react';
import '../App.css';
import GardenGrid from './GardenGrid';
// import Dirt from '../images/dirt.png';
// import Weed from '../images/weed.png';
// import Grass from '../images/grass.png';
// import Sprout from '../images/sprout.png';

// const weeds = [Grass, Weed, Dirt];

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// };

// let makeWeeds = getRandomInt(weeds.length);
// console.log(weeds[getRandomInt(makeWeeds)]);


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
