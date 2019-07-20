import React from 'react'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css'
// import { connect } from 'react-redux'
import ControlCenter from './components/controlCenter/ControlCenter'
import CCGarden from './components/controlCenter/components/CCGarden'
import CCKitchen from './components/controlCenter/components/CCKitchen'
import CCMarket from './components/controlCenter/components/CCMarket'
import CCStore from './components/controlCenter/components/CCStore'
import water from './images/water.png'
import Header from './components/Header'
import GameBoard from './components/GameBoard'

class App extends React.Component {
  state = {
    whichComponent: '',
    producePicked: '',
    watered: false,
    weeded: false,
    harvested: false,
    bakeBtn: false,
    buySugar: '',
    buyFlour: '',
    buyMilk: '',
    buyEggs: '',
    sugarTotal: 0,
    flourTotal: 0,
    milkTotal: 0,
    eggTotal: 0,
    runningTotal: 0,
    readyToSell: false,
    marketBtn: false
  }

  pickProduce = (crop) => {
    this.setState({
      producePicked: crop,
      watered: false,
      weeded: false,
      harvested: false,
    })
  }

  tendGarden = (event) => {
    let id = event.target.dataset.valuename
    if (id === 'waterBtn') {
      console.log('watered')
      this.setState({
        watered: true
      })
      return <img src={water} className="water" alt="water" />
    }
    if (id === 'weedBtn') {
      this.setState({
        weeded: true
      })
    }
    if (id === 'harvestBtn') {
      this.setState({
        harvested: true,
        watered: false
      })
    }
  }

  showBar = () => {
    this.setState({
      bakeBtn: true
    })
  }

  showGoToMarketBtn = () => {
    this.setState({marketBtn: true})
  }

  grabCrop = (crop) => {
    this.setState({producePicked: crop})
  }

  calculateTotal = () => {
    let eggTotal
    let milkTotal
    let flourTotal
    let sugarTotal
    this.state.buyEggs === '' ? eggTotal = 0 : eggTotal = this.state.buyEggs
    this.state.buyMilk === '' ? milkTotal = 0 : milkTotal = this.state.buyMilk * 4
    this.state.buyFlour === '' ? flourTotal = 0 : flourTotal = this.state.buyFlour * 3
    this.state.buySugar === '' ? sugarTotal = 0 : sugarTotal = this.state.buySugar * 6
    let runningTotal = eggTotal + milkTotal + flourTotal + sugarTotal
    this.setState({
      eggTotal,
      milkTotal,
      flourTotal,
      sugarTotal
      // runningTotal
    })
    return runningTotal
  }

  addToCart = (e) => {
    let eggTotal
    let milkTotal
    let flourTotal
    let sugarTotal
    this.state.buyEggs === '' ? eggTotal = 0 : eggTotal = this.state.buyEggs
    this.state.buyMilk === '' ? milkTotal = 0 : milkTotal = this.state.buyMilk * 4
    this.state.buyFlour === '' ? flourTotal = 0 : flourTotal = this.state.buyFlour * 3
    this.state.buySugar === '' ? sugarTotal = 0 : sugarTotal = this.state.buySugar * 6
    console.log('add to cart!')
    let value = parseInt(e.target.value)
    value ? value : value = 0
    this.setState({
      [e.target.name]: value,
      runningTotal: eggTotal + milkTotal + flourTotal + sugarTotal
    })
    
  }

  startSelling = () => {
    this.setState({
      readyToSell: true
    })
  }

  makePurchase = () => {
    console.log(this.state.runningTotal)
  }

  render() {
    const { 
      // buyEggs, buySugar, buyFlour, buyMilk, eggTotal,
      // milkTotal,
      // flourTotal,
      // sugarTotal,
      // runningTotal,
      producePicked } = this.state
    return (
      <div className="App">
        <Header producePicked={producePicked} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter producePicked={producePicked} />
              <Switch>
                <Route path='/garden' exact render={(props) => <CCGarden {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={this.state.watered}
                  weeded={this.state.weeded}
                  harvested={this.state.harvested}
                />} />
                <Route path='/store' exact render={(props) => <CCStore {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={this.state.watered}
                  weeded={this.state.weeded}
                  harvested={this.state.harvested}
                />} />
                <Route path='/kitchen' exact render={(props) => <CCKitchen {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={this.state.watered}
                  weeded={this.state.weeded}
                  harvested={this.state.harvested}
                  showBar={this.showBar}
                />} />
                <Route path='/market' exact render={(props) => <CCMarket {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={this.state.watered}
                  weeded={this.state.weeded}
                  harvested={this.state.harvested}
                  showBar={this.showBar}
                  startSelling={this.startSelling}
                  readyToSell={this.state.readyToSell}
                />} />                
              </Switch>
            </div>
            <div className="col-sm-9">
              <GameBoard 
                grabCrop={this.grabCrop} 
                watered={this.state.watered}
                weeded={this.state.weeded}
                harvested={this.state.harvested}
                bakeBtn={this.state.bakeBtn}
                readyToSell={this.state.readyToSell} />
            </div>
          </div>
        </div>
        <footer>
          <p>{new Date().getFullYear()} Developed by the <a className="footer" href="https://github.com/Lemonade-kids/lemonade">Lemonade Kids</a> for <a className="footer" href="https://customfitkids.us">Custom Fit Kids</a>.</p>
        </footer>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     producePicked: state.producePicked
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     chooseProduce: (seed) => {
//       dispatch({
//         type: 'SAVECHOICE',
//         payload: seed
//       })
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)


export default App
