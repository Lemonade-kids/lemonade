import React, { Component } from 'react';
import '../../App.css';

class CCGardenWeedButton extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <div className="CCGardenWeedButton">
      <button className='btn' id="weed" onClick={this.props.onClick}>Weed</button>
      </div>
    );
  }
}

export default CCGardenWeedButton;