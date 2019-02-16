import React, { Component } from 'react';
import '../App.css';
import StartScreen from './StartScreen';

import Blueberries from '../images/blueberries.png';
import Lemons from '../images/lemons.png';
import Squashes from '../images/squashes.png';
import API from '../utils/API';

// import LetsPlayButton from './LetsPlayButton';
import axios from 'axios';



class LogIn extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {
      user: "",
      pwd: "",
      gender: "male"};
  }

  update = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLoginClick = (event) => {
    event.preventDefault(); 
    API.login(this.state).then(() => {
      console.log("this is wrking");
      //axios.post("login", {user: this.state.username, pwd: this.state.password})
    })
    // todo: check to see if login worked
    this.setState({
      letsPlay: <StartScreen/>, 
      gender: "female"
    });
  }

  handleNewUserClick = (event) => {
    event.preventDefault(); 
    API.newUser(this.state).then(() => {
      console.log("hit thi nw")
     //axios.post("api/newUser", {user: this.state.username, pwd: this.state.password})
    })
    // todo: check to see if user exists, etc.
    this.setState({
      letsPlay: <StartScreen/>,
      user: document.getElementById("user").value,
      pwd: document.getElementById("pwd").value,
      gender: "female"
    });

  }

  render() {
    var FirstDiv = "";
    var SecondDiv = "";
    if(this.state.gender === "male"){
        SecondDiv = "none";
        FirstDiv = "block";
    }
    else{
        FirstDiv = "none";
        SecondDiv = "block";
    } 

    return (
      <div gender="male" className={FirstDiv}>
        <div className="LogIn">
          <form>
            <div style={{display:FirstDiv}} className="form-group row">
              <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                </div>
                <input type="text" className="form-control col-sm-5" id="user" name="user" onChange={this.update} placeholder="Username"></input>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                <div className="col-sm-1" />
                <div className="col-sm-9 password-box">
                  <input type="password" className="form-control" id="pwd" name="pwd" onChange={this.update} placeholder="Password"></input>
                </div>
              </div>
              <button className="btn btn-outline-primary" onClick={this.handleNewUserClick.bind(this)}>Sign Up</button>
              <button className="btn btn-outline-primary" onClick={this.handleLoginClick.bind(this)}>Login</button>
            </div>
           
          <div style={{display:SecondDiv}} gender="female" className={SecondDiv}>
            <div className="loginChoice">
              <img src={Lemons} alt="lemons" className="loginLemon loginFruit" />
              <button type="button" className="btn btn-outline-secondary">Lemons</button>

              <img src={Blueberries} alt="blueberry" className="loginBlueberry loginFruit" />
              <button type="button" className="btn btn-outline-secondary">Blueberries</button>

              <img src={Squashes} alt="squash" className="loginSquash loginFruit" />
              <button type="button" className="btn btn-outline-secondary">Squash</button>
            </div>

            <button className="btn btn-outline-primary" onClick={this.handleLoginClick.bind(this)}>Let's play!</button>

            </div>
            </form>
          
        </div>
      </div>
    );
  }
}

export default LogIn;
