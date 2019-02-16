import React, { Component } from 'react';
import '../../App.css';

class CCGardenHarvestButton extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <div className="CCGardenHarvestButton">
      <button className='btn' id="harvest" onClick={this.props.onClick}>Harvest</button>
      </div>
    );
  }
}

export default CCGardenHarvestButton;