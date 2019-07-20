import React, { Component } from 'react'
import '../App.css'
import { Switch, Route } from 'react-router-dom'
import Garden from './garden/components/Garden'
import SellingStand from './market/components/SellingStand'
import SupplyStore from './supplyStore/components/SupplyStore'
import Kitchen from './kitchen/components/Kitchen'
import StartScreen from './StartScreen'
import LogIn from './LogIn'
import Help from './Help'
import PropTypes from 'prop-types'

class GameBoard extends Component {
  goBack = () => {
    window.history.back()
  }
  render() {
    return (
      <div className="Gameboard">
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/garden' exact render={(props) => <Garden {...props}
            grabCrop={this.props.grabCrop}
            watered={this.props.watered}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
          />} />
          <Route path="/start-over" component={StartScreen} />
          <Route path='/store' exact render={(props) => <SupplyStore {...props}
            grabCrop={this.props.grabCrop}
          />} />
          <Route path='/kitchen' exact render={(props) => <Kitchen {...props}
            grabCrop={this.props.grabCrop}
            bakeBtn={this.props.bakeBtn}
          />} />
          <Route path='/market' exact render={(props) => <SellingStand {...props}
            grabCrop={this.props.grabCrop}
            // startSelling={this.props.startSelling}
            readyToSell={this.props.readyToSell}
          />} />
          <Route path='/help' component={Help} />
        </Switch>
      </div>
    )
  }
}

GameBoard.propTypes = {
  grabCrop: PropTypes.func,
  weeded: PropTypes.bool,
  watered: PropTypes.bool,
  harvested: PropTypes.bool,
  bakeBtn: PropTypes.bool,
  startSelling: PropTypes.func,
  readyToSell: PropTypes.bool
}

export default GameBoard