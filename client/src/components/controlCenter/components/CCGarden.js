import React from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class CCGarden extends React.Component {
  state = {
    buttonReady: false
  }

  constructor(props) {
    super(props)
    this.showBtn()
  }

  showBtn = () => {
    setTimeout(() => {
      this.setState({buttonReady: true})
    }, 8000)
  }
  render() {
    return (
      <div className="CCGarden">
        {this.props.harvested ? null : 
          <button className={this.props.watered ? 'hideBtn' : 'btn' }
            data-valuename="waterBtn"
            onClick={this.props.tendGarden}>Water</button>}

        <button className={ this.props.weeded ? 'hideBtn' : 'btn' }
          data-valuename="weedBtn"
          onClick={this.props.tendGarden}>Weed</button>

        {this.state.buttonReady ?
          <button className={ this.props.harvested ? 'hideBtn' : 'btn' }
            data-valuename="harvestBtn"
            onClick={this.props.tendGarden}>Harvest</button>
          : null}
        <NavLink to={{
          pathname: '/store',
          produceProps:{
            producePicked: this.props.producePicked,
            bank: this.props.bank,
            cropAmount: this.props.cropAmount,
            temperature: this.props.temperature
          }
        }}>
          <button className={ this.props.harvested ? 'btn' : 'hideBtn' }
          >Get supplies!</button>
        </NavLink>
      </div>
    )
  }
}

CCGarden.propTypes = {
  watered: PropTypes.bool,
  weeded: PropTypes.bool,
  harvested: PropTypes.bool,
  tendGarden: PropTypes.func,
  producePicked: PropTypes.string,
  bank: PropTypes.number,
  cropAmount: PropTypes.number,
  temperature: PropTypes.number
}

export default CCGarden