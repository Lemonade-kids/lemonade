import React, { Component } from 'react';
import '../App.css';
import Sprout from '../images/sprout.png';
import BlueberryBush from '../images/blueberrybush.png';
import LemonTree from '../images/lemontree.png';
import SquashPlant from '../images/squash.png';

class Produce extends Component {
  state = {
    crop: ''
  }
  constructor(props) {
    super(props);
    this.grow('squash')
  }

  whichCrop(seed) {
    let tmp = ''

    switch (seed) {
      case 'blueberry':
        tmp = BlueberryBush //<img src={BlueberryBush} className="produce-large" alt="blueberry" />;
        break;
      case 'lemon':
        tmp = LemonTree //<img src={LemonTree} className="produce-large" alt="lemon" />;
        break;
      case 'squash':
        tmp = SquashPlant //<img src={SquashPlant} className="produce-large" alt="squash" />;
        break;
      default:
        tmp = Sprout //<img src={Sprout} className="produce-small" alt="sprout" />;
        break;
    }

    this.setState({ crop: tmp })
  }

  grow(seed) {
    setTimeout(() => {
      this.whichCrop(seed)
    }, 5000)
  }

  render() {
    return (
       <div className="Produce">
       <img src={this.state.crop} className="produce-large" alt="squash" />
       {/* {setTimeout(grow(seed)), 4000)} */}
        {/* {whichCrop(seed)} */}
        {}

      </div>
    );
  }
}

export default Produce;