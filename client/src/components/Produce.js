import React, { Component } from 'react';
import '../App.css';
import Sprout from '../images/sprout.png';
import BlueberryBush from '../images/blueberrybush.png';
import LemonTree from '../images/lemontree.png';

let seed = 'lemon';

const whichCrop = (seed) => {
    switch (seed) {
        case 'blueberry':
          return <img src={BlueberryBush} className="produce-large" alt="blueberry" />;
        case 'lemon':
          return <img src={LemonTree} className="produce-large" alt="lemon" />;
        case 'squash':
          return <img src={BlueberryBush} className="produce-large" alt="squash" />;
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