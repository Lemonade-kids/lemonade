import React, { Component } from 'react';
import '../App.css';

class StartScreen extends Component {
//   constructor(props) {
//     super(props);
//  }

  render() {
    return (
      <p className='start'>Are you sure you want to start over?  You'll lose any progress you've made so far!</p>
    );
  }
}

export default StartScreen;