import React, { Component } from 'react';
import '../App.css';
import Closed from '../images/closedsign.png';

class Help extends Component {
  render() {
    return (
      <div className="Help">
        <img src={ Closed } alt="closed" className="closed-sign"/>
      </div>
    );
  }
}

export default Help;