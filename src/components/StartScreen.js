import React, { Component } from 'react';
import '../App.css';
import Garden from '../components/Garden';
import Login from '../components/LogIn';

class StartScreen extends Component {
  // constructor(props) {
  //   super(props);
  //     this.showChoice = this.showChoice.bind(this);
  //   }

  //   handleChoice(event) {
  //     let id = event.target.id;
  //     this.setState({
  //       whichChoice: this.showChoice(id)
  //     });
  //   }
  //   showChoice(id) {
  //     switch (id) {
  //       case 'start-over':
  //       return <Login />;
  //       case 'nevermind':
  //       return <Garden />;
  //       default:
  //       return <Login/>;
  //     }
  //   }
  render() {
    return (
      <div className="StartScreen">
      <div className="start-border">
      <p className='start'>Are you sure you want to start over?  You'll lose any progress you've made so far!</p>
      {/* <button className='btn' id="start-over" {onClick={this.handleClick.bind(this)}}>Yes, I'm sure!</button> */}
      {/* <button className='btn' id="nevermind" {onClick={this.handleClick.bind(this)}}>Nevermind.</button> */}
      
      </div>
      </div>
    );
  }
}

export default StartScreen;