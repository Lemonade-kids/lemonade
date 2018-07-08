import React, { Component } from 'react';
import '../App.css';

class StartScreen extends Component {
  render() {
    return (
      <div className="StartScreen">
      <div className="start-border">
      <p className='start'>Are you sure you want to start over?  You'll lose any progress you've made so far!</p>
      <button className='btn'>Yes, I'm sure!</button>
      <button className='btn'>Nevermind.</button>
      </div>
      </div>
    );
  }
}

export default StartScreen;