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
          return BlueberryBush //<img src={BlueberryBush} className="produce-large" alt="blueberry" />;
        case 'lemon':
          return LemonTree //<img src={LemonTree} className="produce-large" alt="lemon" />;
        case 'squash':
          return SquashPlant //<img src={SquashPlant} className="produce-large" alt="squash" />;
        default:
          return null //<img src={Sprout} className="produce-small" alt="sprout" />;
      }
};



const grow = (seed) => {
  return (
  <img src={whichCrop(seed)} className="produce-large" alt={seed} />,
  console.log(whichCrop(seed))
  )

  
}


class Produce extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="Produce">
       {setTimeout(() => grow(seed), 4000)}
        {/* {whichCrop(seed)} */}
        {}

      </div>
    );
  }
}

export default Produce;