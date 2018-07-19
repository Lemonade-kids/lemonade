import React, { Component } from 'react';
import '../../App.css';

class CCGardenWaterButton extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <div className="CCGardenWaterButton">
      <button className='btn' id="water" onClick={this.props.onClick}>Water</button>
      </div>
    );
  }
}

export default CCGardenWaterButton;