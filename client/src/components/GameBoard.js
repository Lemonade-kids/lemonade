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
  render() {
    return (
      <div className="Gameboard">
        <Switch>
          <Route path='/' exact render={(props) => <LogIn {...props}
            restart={this.props.restart}
            getTodaysTemp={this.props.getTodaysTemp}
          />} />
          <Route path='/garden' exact render={(props) => <Garden {...props}
            grabData={this.props.grabData}
            watered={this.props.watered}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
          />} />
          <Route path="/start-over" component={StartScreen} />
          <Route path='/store' exact render={(props) => <SupplyStore {...props}
            grabData={this.props.grabData}
            buySugar={this.props.buySugar}
            buyFlour={this.props.buyFlour}
            buyMilk={this.props.buyMilk}
            buyEggs={this.props.buyEggs}
            addToCart={this.props.addToCart}
          />} />
          <Route path='/kitchen' exact render={(props) => <Kitchen {...props}
            grabData={this.props.grabData}
            bakeBtn={this.props.bakeBtn}
            bank={this.props.bank}
            product={this.props.product}
            temperature={this.props.temperature}
            cropAmount={this.props.cropAmount}
            producePicked={this.props.producePicked}
          />} />
          <Route path='/market' exact render={(props) => <SellingStand {...props}
            grabData={this.props.grabData}
            readyToSell={this.props.readyToSell}
            producePicked={this.props.producePicked}
            customers={this.props.customers}
          />} />
          <Route path='/help' component={Help} />
        </Switch>
      </div>
    )
  }
}

GameBoard.propTypes = {
  grabData: PropTypes.func,
  weeded: PropTypes.bool,
  watered: PropTypes.bool,
  harvested: PropTypes.bool,
  bakeBtn: PropTypes.bool,
  startSelling: PropTypes.func,
  readyToSell: PropTypes.bool,
  buyEggs: PropTypes.any,
  buyFlour: PropTypes.any,
  buyMilk: PropTypes.any,
  buySugar: PropTypes.any,
  addToCart: PropTypes.func,
  restart: PropTypes.func,
  getTodaysTemp: PropTypes.func,
  bank: PropTypes.number,
  product: PropTypes.number,
  temperature: PropTypes.number,
  cropAmount: PropTypes.number,
  producePicked: PropTypes.string,
  customers: PropTypes.number
}

export default GameBoard