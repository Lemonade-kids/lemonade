import React, { Component } from 'react';
import '../App.css';
import Sprout from '../images/sprout.png';
import BlueberryBush from '../images/blueberrybush.png';
import LemonTree from '../images/lemontree.png';
import SquashPlant from '../images/squash.png';

let seed = 'squash';

const whichCrop = (seed) => {
    switch (seed) {
        case 'blueberry':
          return <img src={BlueberryBush} className="produce-large" alt="blueberry" />;
        case 'lemon':
          return <img src={LemonTree} className="produce-large" alt="lemon" />;
        case 'squash':
          return <img src={SquashPlant} className="produce-large" alt="squash" />;
        default:
          return <img src={Sprout} className="produce-small" alt="sprout" />;
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