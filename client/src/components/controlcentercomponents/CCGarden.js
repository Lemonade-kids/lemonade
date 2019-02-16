import React, { Component } from 'react';
import '../../App.css';
import Weeds from '../Weeds';


class CCGarden extends Component {
  render() {
    return (
      <div className="CCGarden">
      <button className="btn" id="water" action="water" onClick={this.hideWeeds}>Water</button>
        <button className="btn" id="weed" action="weed"  onClick={this.hideWeeds}>Weed</button>
        <button className="btn" id="harvest" action="harvest" onClick={this.hideWeeds}>Harvest</button>
      </div>
    );
  }
}

export default CCGarden;