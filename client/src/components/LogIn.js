import React from 'react'
import '../App.css'
// import StartScreen from './StartScreen'
import PropTypes from 'prop-types'
import Blueberries from '../images/blueberries.png'
import Lemons from '../images/lemons.png'
import Squashes from '../images/squashes.png'
import { NavLink } from 'react-router-dom'

class LogIn extends React.Component {
  state = {
    producePicked: '',
    bank: 50,
    cropAmount: 0,
    temperature: 0,
    error: ''
  }

  handleChoice = (event) => {
    const { name, value } = event.target
    let temperature = 0
    try{
      temperature = this.props.getTodaysTemp()
    } catch (e) {
      this.setState({error: e.message})
    }
    this.setState({
      [name]: value,
      temperature
    })
  }

  sendPropsUp = () => {
    this.props.restart()
  }

  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      const bank = this.props.location.produceProps.bank
      const cropAmount = this.props.location.produceProps.cropAmount
      this.setState({producePicked: crop, bank, cropAmount})
      try {
        this.sendPropsUp(this.state)
      } catch (e) {
        this.setState({error: e.message})
      }
    }
  }
  render() {
    const { producePicked } = this.state
    return (
      <div className="LogIn">
        <div className="loginChoice">
          <img src={Lemons}
            alt="lemons"
            className="loginLemon loginFruit" />
          <button
            name='producePicked'
            type="button"
            className={producePicked === 'Lemon' ? 'btn-active' : 'btn btn-outline-secondary'}
            data-valuename='Lemon'
            value='Lemon'
            onClick={this.handleChoice}>Lemons</button>

          <img src={Blueberries}
            alt="blueberry"
            className="loginBlueberry loginFruit" />
          <button
            name='producePicked'
            type="button"
            className={producePicked === 'Blueberry' ? 'btn-active' : 'btn btn-outline-secondary'}
            data-valuename='Blueberry'
            value='Blueberry'
            onClick={this.handleChoice}>Blueberries</button>

          <img src={Squashes}
            alt="squash"
            className="loginSquash loginFruit" />
          <button
            name='producePicked'
            type="button"
            className={producePicked === 'Squash' ? 'btn-active' : 'btn btn-outline-secondary'}
            data-valuename="squash"
            value='Squash'
            onClick={this.handleChoice}>Squash</button>
        </div>
        <NavLink to={{
          pathname: producePicked ? '/garden' : '/',
          produceProps:{
            producePicked: this.state.producePicked,
            bank: this.state.bank,
            cropAmount: this.state.cropAmount,
            temperature: this.state.temperature
          }
        }}>
          <button
            className={producePicked ? 'btn btn-start' : 'btn-disabled'}
          >{'Let\'s play!'}</button>
        </NavLink>
      </div>
    )
  }
}

LogIn.propTypes = {
  pickProduce: PropTypes.func,
  restart: PropTypes.func,
  location: PropTypes.object,
  getTodaysTemp: PropTypes.func
}

// const mapStateToProps = state => {
//   return{
//     producePicked: state.producePicked
//   }
// }

// export default withRouter(connect(mapStateToProps)(LogIn))

export default LogIn