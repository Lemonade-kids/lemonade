import React, { Component } from 'react';
import '../App.css';
import StartScreen from './StartScreen';
import BlueberryBush from '../images/blueberrybush.png';
import LemonTree from '../images/lemontree.png';
import API from '../utils/API';


class LogIn extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    API.newUser()//json obj
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
              <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"></input>
            </div>
            <div className="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
              </div>
            </div>
          </div>

          <div>
            <img src={LemonTree} alt="lemons" className="loginLemon"/> 
            <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-outline-primary">Lemons</button>

           
          </div>

          <div>
            <img src= {BlueberryBush} alt="blueberry" className="loginBlueberry"/> 
            <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-outline-primary">Blueberries</button>
          </div>

          <div>
            <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-outline-primary">Squash</button>
          </div>

      </form>

      <button onClick={this.handleClick.bind(this)}>Let's play!</button>
      </div>
    
        );
      }
    }
    
    export default LogIn;
