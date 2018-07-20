import React, { Component } from 'react';
import '../App.css';

class LetsPlayButton extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <div className="LetsPlayButton">
      <button className='btn btn-outline-primary' id="lets-play" onClick={this.props.onClick}>Let's play!</button>     
      </div>
    );
  }
}

export default LetsPlayButton;