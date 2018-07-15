import React, { Component } from 'react';
import '../App.css';
import StartScreen from './StartScreen';
import Blueberries from '../images/blueberries.png';
import Lemons from '../images/lemons.png';
import Squashes from '../images/squashes.png';


class LogIn extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      letsPlay: <StartScreen />
    });
  }

  render() {
    return (
      <div className="LogIn">
        <form>
          <div className="form-group row">
            <label className="sr-only" for="inlineFormInputGroup">Username</label>
            <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
              </div>
              <input type="text" className="form-control col-sm-5" id="inlineFormInputGroupUsername2" placeholder="Username"></input>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-1" />
              <div className="col-sm-9 password-box">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
              </div>
            </div>
          </div>

          <div className="loginChoice">
            <img src= { Lemons } alt="lemons" className="loginLemon loginFruit"/> 
            <button type="button" className="btn btn-outline-primary">Lemons</button>
          </div>

          <div className="loginChoice">
            <img src= { Blueberries } alt="blueberry" className="loginBlueberry loginFruit"/> 
            <button type="button" className="btn btn-outline-primary">Blueberries</button>
          </div>

          <div className="loginChoice">
            <img src= { Squashes } alt="squash" className="loginSquash loginFruit" />
            <button type="button" className="btn btn-outline-primary">Squash</button>
          </div>

      </form>

      <button className="btn btn-outline-primary" onClick={this.handleClick.bind(this)}>Let's play!</button>
      </div>
    
        );
      }
    }
    
    export default LogIn;
