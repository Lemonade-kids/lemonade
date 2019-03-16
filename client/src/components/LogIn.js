import React from 'react'
import '../App.css'
import StartScreen from './StartScreen'
import PropTypes from 'prop-types'
import Blueberries from '../images/blueberries.png'
import Lemons from '../images/lemons.png'
import Squashes from '../images/squashes.png'
import API from '../utils/API'
import {connect} from 'react-redux'

// import LetsPlayButton from './LetsPlayButton';
// import axios from 'axios'



class LogIn extends React.Component {
  state = {
    user: '',
    pwd: '',
    gender: 'male',
    producePicked: ''
  }

  update = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleLoginClick = (event) => {
    event.preventDefault()
    API.login(this.state).then(() => {
      console.log('this is wrking')
      //axios.post("login", {user: this.state.username, pwd: this.state.password})
    })
    // todo: check to see if login worked
    this.setState({
      letsPlay: <StartScreen />,
      gender: 'female'
    })
  }

  handleNewUserClick = (event) => {
    event.preventDefault()
    API.newUser(this.state).then(() => {
      console.log('hit thi nw')
      //axios.post("api/newUser", {user: this.state.username, pwd: this.state.password})
    })
    // todo: check to see if user exists, etc.
    //   this.setState({
    //     letsPlay: <StartScreen/>,
    //     user: document.getElementById('user').value,
    //     pwd: document.getElementById('pwd').value,
    //     gender: 'female'
    //   })

  }

  render() {
    console.log(this.props, this.state.producePicked)
    return (
      <div>
        <div className="LogIn">
          {/* <form> */}
            {/* <div style={{display:FirstDiv}} className="form-group row">
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
            </div> */}

            {/* <div style={{display:SecondDiv}} gender="female" className={SecondDiv}> */}
            <div>
              <div className="loginChoice">
                <img src={Lemons}
                  alt="lemons"
                  className="loginLemon loginFruit" />
                <button
                  name='producePicked'
                  type="button"
                  className="btn btn-outline-secondary"
                  data-valuename='lemon'
                  value='lemon'
                  onClick={this.update}>Lemons</button>

                <img src={Blueberries}
                  alt="blueberry"
                  className="loginBlueberry loginFruit" />
                <button
                  name='producePicked'
                  type="button"
                  className="btn btn-outline-secondary"
                  data-valuename='blueberry'
                  value='blueberry'
                  onClick={this.update}>Blueberries</button>

                <img src={Squashes}
                  alt="squash"
                  className="loginSquash loginFruit" />
                <button
                  name='producePicked'
                  type="button"
                  className="btn btn-outline-secondary"
                  data-valuename="squash"
                  value='squash'
                  onClick={this.update}>Squash</button>
              </div>

              <button
                className="btn btn-outline-primary"
                onClick={this.props.playWithProduce}>Let's play!</button>

            </div>
          {/* </form> */}

        </div>
      </div>
    )
  }
}

LogIn.propTypes = {
  pickProduce: PropTypes.func,
  playWithProduce: PropTypes.func
}

const mapStateToProps = state => {
  return{
    producePicked: state.producePicked
  }
}

export default connect(mapStateToProps)(LogIn)
