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
            // tendGarden={this.props.tendGarden}
          />} />
          <Route path="/start-over" component={StartScreen} />
          {/* <Route path="/garden" component={Garden} /> */}
          {/* <Route path='/store' component={SupplyStore} /> */}
          <Route path='/store' exact render={(props) => <SupplyStore {...props}
            grabCrop={this.props.grabCrop}
          />} />
          {/* <Route path='/kitchen' component={Kitchen} /> */}
          <Route path='/kitchen' exact render={(props) => <Kitchen {...props}
            grabCrop={this.props.grabCrop}
          />} />
          {/* <Route path='/market' component={SellingStand} /> */}
          <Route path='/market' exact render={(props) => <SellingStand {...props}
            grabCrop={this.props.grabCrop}
          />} />
          <Route path='/help' component={Help} />
        </Switch>
      </div>
    )
  }
}

GameBoard.propTypes = {
  grabCrop: PropTypes.func
}

export default GameBoard