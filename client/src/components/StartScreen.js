import React, { Component } from 'react';
import '../App.css';

class StartScreen extends Component {
  //constructor(props) {
    // super(props);
    //   this.showChoice = this.showChoice.bind(this);
    // }

    // handleChoice(event) {
    //   let id = event.target.id;
    //   this.setState({
    //     whichChoice: this.showChoice
    //   })
    // }
 // }
  render() {
    return (
      <div className="StartScreen">
      <div className="start-border">
      <p className='start'>Are you sure you want to start over?  You'll lose any progress you've made so far!</p>
      <button className='btn' id="start-over">Yes, I'm sure!</button>
      <button className='btn' id="nevermind">Nevermind.</button>
      </div>
      </div>
    );
  }
}

export default StartScreen;