import React, { Component } from 'react';
import '../App.css';
import Sprout from '../images/sprout.png';
import BlueberryBush from '../images/blueberrybush.png';

let seed = 'blueberry';

const whichCrop = (seed) => {
    switch (seed) {
        case 'blueberry':
          return <img src={BlueberryBush} className="produce-large" />;
        case 'lemon':
          return <img src={BlueberryBush} className="produce-large" />;
        case 'squash':
          return <img src={BlueberryBush} className="produce-large" />;
        default:
          return null;
      }
};

class Produce extends Component {
  render() {
    return (
      <div className="Produce">
        {whichCrop(seed)}

      </div>
    );
  }
}

export default Produce;