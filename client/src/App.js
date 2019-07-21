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
    marketBtn: false,
    bank: 50,
    products: 0,
    cropAmount: 0
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
        watered: false,
        cropAmount: 18
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

  /* function that gets passed to child components that
  checks on these values in there and returns them back here (putting them in state),
  so any changes get passed throughout other parts of the app */
  grabData = (crop, bank, cropAmount) => {
    this.setState({producePicked: crop, bank, cropAmount})
  }

  addToCart = (buyEggs, buyFlour, buyMilk, buySugar) => {
    let eggTotal
    let milkTotal
    let flourTotal
    let sugarTotal
    buyEggs === '' ? eggTotal = 0 : eggTotal = buyEggs * 1
    buyMilk === '' ? milkTotal = 0 : milkTotal = buyMilk * 4
    buyFlour === '' ? flourTotal = 0 : flourTotal = buyFlour * 3
    buySugar === '' ? sugarTotal = 0 : sugarTotal = buySugar * 6
    this.setState({
      buyEggs, buyFlour, buyMilk, buySugar,
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
    const newBank = this.state.bank - this.state.runningTotal
    this.setState({
      bank: newBank, 
      buyEggs: 0,
      buyFlour: 0,
      buyMilk: 0,
      buySugar: 0,
      runningTotal: 0
    })
  }

  render() {
    const { 
      buyEggs, 
      buySugar, 
      buyFlour, 
      buyMilk, 
      eggTotal,
      milkTotal,
      flourTotal,
      sugarTotal,
      runningTotal,
      producePicked,
      harvested,
      watered,
      weeded,
      readyToSell,
      bakeBtn,
      bank,
      cropAmount } = this.state
    return (
      <div className="App">
        <Header 
          producePicked={producePicked}
          bank={bank}
          cropAmount={cropAmount} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter 
                producePicked={producePicked} 
                bank={bank} 
                cropAmount={cropAmount} />
              <Switch>
                <Route path='/garden' exact render={(props) => <CCGarden {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  bank={bank}
                  cropAmount={cropAmount}
                />} />
                <Route path='/store' exact render={(props) => <CCStore {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  buySugar={buySugar}
                  buyFlour={buyFlour}
                  buyMilk={buyMilk}
                  buyEggs={buyEggs}
                  sugarTotal={sugarTotal}
                  flourTotal={flourTotal}
                  milkTotal={milkTotal}
                  eggTotal={eggTotal}
                  runningTotal={runningTotal}
                  bank={bank}
                  cropAmount={cropAmount}
                  makePurchase={this.makePurchase}
                />} />
                <Route path='/kitchen' exact render={(props) => <CCKitchen {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  showBar={this.showBar}
                  bank={bank}
                  cropAmount={cropAmount}
                />} />
                <Route path='/market' exact render={(props) => <CCMarket {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  showBar={this.showBar}
                  startSelling={this.startSelling}
                  readyToSell={readyToSell}
                  bank={bank}
                  cropAmount={cropAmount}
                />} />                
              </Switch>
            </div>
            <div className="col-sm-9">
              <GameBoard 
                grabData={this.grabData} 
                watered={watered}
                weeded={weeded}
                harvested={harvested}
                bakeBtn={bakeBtn}
                readyToSell={readyToSell}
                buySugar={buySugar}
                buyFlour={buyFlour}
                buyMilk={buyMilk}
                buyEggs={buyEggs}
                addToCart={this.addToCart}
                bank={bank} />
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
