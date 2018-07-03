import React, { Component } from 'react';
import '../App.css';
import StartScreen from './StartScreen';



class LogIn extends Component {
    constructor(props) {
        super(props);
        //this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState ({
          letsPlay: <StartScreen />
        });
      }

  render() {
    return (
       <div className="LogIn">
      <button onClick={this.handleClick.bind(this)}>Let's play!</button>
      </div>
    );
  }
}

export default LogIn;