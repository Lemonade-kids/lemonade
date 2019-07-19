import React from 'react'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Garden from './components/garden/components/Garden'
import SellingStand from './components/market/components/SellingStand'
import SupplyStore from './components/supplyStore/components/SupplyStore'
import Kitchen from './components/kitchen/components/Kitchen'
import ControlCenter from './components/controlCenter/ControlCenter'
import StartScreen from './components/StartScreen'
import LogIn from './components/LogIn'
import Help from './components/Help'
import CCGarden from './components/controlCenter/components/CCGarden'
import CCKitchen from './components/controlCenter/components/CCKitchen'
import CCMarket from './components/controlCenter/components/CCMarket'
import CCStore from './components/controlCenter/components/CCStore'
import water from './images/water.png'
import Header from './components/Header'

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
    show: true
  }

  pickProduce = (crop) => {
    this.setState({producePicked: crop})
  }

  // playWithProduce = (event) => {
  //   event.preventDefault()
  //   console.log(this.state.producePicked)
  // }

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
        harvested: true
      })
    }
  }

  showBar = () => {
    this.setState({
      bakeBtn: true
    })
  }

  goToMarket = () => {
    window.location.replace('/market')
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

  // buttons in control center
  showCCComponent(id) {
    switch (id) {
    case 'garden':
      return <div className="CCGarden">
        <CCGarden
          // onClick={this.tendGarden}
          playWithProduce={this.playWithProduce}
          pickProduce={this.pickProduce}
          producePicked={this.state.producePicked}
          weeded={this.state.weeded}
          harvested={this.state.harvested}
          watered={this.state.watered} />
      </div>
    case 'supply' || window.location.pathname.includes('/store'):
      return <CCStore runningTotal={this.state.runningTotal} />
    case 'stand' || window.location.pathname.includes('/market'):
      return <CCMarket />
    case 'kitchen' || window.location.pathname.includes('/kitchen'):
      return <CCKitchen showBar={this.showBar} />
    case 'go-to-market' || window.location.pathname.includes('/market'):
      return <CCMarket />
    case 'nevermind':
      return <div className="CCGarden">
        <CCGarden onClick={this.tendGarden} />
      </div>
    default:
      if (window.location.pathname.includes('/market')) {
        return <CCMarket />
      }
      if (window.location.pathname.includes('/store')) {
        return <CCStore />
      }
      if (window.location.pathname.includes('/kitchen')) {
        return <CCKitchen showBar={this.showBar} />
      }
    }
  }

  render() {
    const { buyEggs, buySugar, buyFlour, buyMilk, eggTotal,
      milkTotal,
      flourTotal,
      sugarTotal,
      runningTotal,
      producePicked } = this.state
    console.log(buyEggs, buySugar, buyFlour, buyMilk)
    console.log('eggTotal', typeof eggTotal)
    console.log('milkTotal', milkTotal)
    console.log('flourTotal', typeof flourTotal)
    console.log('sugarTotal', sugarTotal)
    console.log('runningTotal', runningTotal)
    return (
      <div className="App">
        <Header producePicked={producePicked} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter />
              {/* {this.state.whichCCComponent} */}
              <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                  <Route path="/garden" component={CCGarden} />
                  <Route path='/store' component={CCStore} />
                  <Route path='/kitchen' component={CCKitchen} />
                  <Route path='/market' component={CCMarket} />
                </Switch>
              </Router>
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
                {/* {this.showComponent} */}
                <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                    <Route exact path='/' component={LogIn} />
                    <Route path="/start-over" component={StartScreen} />
                    <Route path="/garden" component={Garden} />
                    <Route path='/store' component={SupplyStore} />
                    <Route path='/kitchen' component={Kitchen} />
                    <Route path='/market' component={SellingStand} />
                    <Route path='/help' component={Help} />
                  </Switch>
                </Router>
              </div>
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

const mapStateToProps = (state) => {
  return {
    producePicked: state.producePicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseProduce: (seed) => {
      dispatch({
        type: 'SAVECHOICE',
        payload: seed
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default App
