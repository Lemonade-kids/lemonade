import React from 'react'
import '../App.css'
import StartScreen from './StartScreen'
import PropTypes from 'prop-types'
import Blueberries from '../images/blueberries.png'
import Lemons from '../images/lemons.png'
import Squashes from '../images/squashes.png'
import API from '../utils/API'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class LogIn extends React.Component {
  state = {
    // user: '',
    // pwd: '',
    // gender: 'male',
    producePicked: ''
  }

  // function that wraps another function passed down in props
  // they have the same name because they're working together for the same thing
  pickProduce = () => {
    const crop = this.state.producePicked
    this.props.pickProduce(crop)
  }

  handleChoice = (event) => {
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
    // console.log('produce in start---', this.state.producePicked)
    // console.log('props???', this.props)
    const { producePicked } = this.state
    return (
      <div>
        <div className="LogIn">
          <div>
            <div className="loginChoice">
              <img src={Lemons}
                alt="lemons"
                className="loginLemon loginFruit" />
              <button
                name='producePicked'
                type="button"
                className={producePicked === 'lemon' ? 'btn-active' : 'btn btn-outline-secondary'}
                data-valuename='lemon'
                value='lemon'
                onClick={this.handleChoice}>Lemons</button>

              <img src={Blueberries}
                alt="blueberry"
                className="loginBlueberry loginFruit" />
              <button
                name='producePicked'
                type="button"
                className={producePicked === 'blueberry' ? 'btn-active' : 'btn btn-outline-secondary'}
                data-valuename='blueberry'
                value='blueberry'
                onClick={this.handleChoice}>Blueberries</button>

              <img src={Squashes}
                alt="squash"
                className="loginSquash loginFruit" />
              <button
                name='producePicked'
                type="button"
                className={producePicked === 'squash' ? 'btn-active' : 'btn btn-outline-secondary'}
                data-valuename="squash"
                value='squash'
                onClick={this.handleChoice}>Squash</button>
            </div>
            <NavLink to={{
              pathname: producePicked ? '/garden' : '/',
              produceProps:{
                producePicked: this.state.producePicked
              }
            }}>
              <button
                className={producePicked ? 'btn btn-start' : 'btn-disabled'}
                // onClick={this.pickProduce}
              >{'Let\'s play!'}</button>
            </NavLink>
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

export default withRouter(connect(mapStateToProps)(LogIn))