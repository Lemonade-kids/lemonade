import React from 'react'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Rooster from './images/rooster.png'
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
    readyToSell: false
  }
  /** pick produce, set state with picked, pass on to props with which one picked
   * grows in garden, gets made in kitchen, sells-- need to figure out how flow happens, could use react router & window.loc.replace
   */
  // pickProduce = (event) => {
  //   this.setState({
  //     // producePicked: event.target.dataset.valuename
  //     producePicked: event.target.value
  //   })
  //   console.log(this.state.producePicked)
  // }

  pickProduce = (crop) => {
    this.setState({producePicked: crop})
  }

  playWithProduce = (event) => {
    event.preventDefault()
    console.log(this.state.producePicked)
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
    // let runningTotal = eggTotal + milkTotal + flourTotal + sugarTotal
    // this.calculateTotal()
    // let eggTotal
    // let milkTotal
    // let flourTotal
    // let sugarTotal
    // this.state.buyEggs === '' ? eggTotal = 0 : eggTotal = this.state.buyEggs
    // this.state.buyMilk === '' ? milkTotal = 0 : milkTotal = this.state.buyMilk * 4
    // this.state.buyFlour === '' ? flourTotal = 0 : flourTotal = this.state.buyFlour * 3
    // this.state.buySugar === '' ? sugarTotal = 0 : sugarTotal = this.state.buySugar * 6
    // let runningTotal = eggTotal + milkTotal + flourTotal + sugarTotal
    // this.setState({
    //   eggTotal,
    //   milkTotal,
    //   flourTotal,
    //   sugarTotal,
    //   runningTotal
    // })
    
  }

  startSelling = () => {
    this.setState({
      readyToSell: true
    })
  }

  makePurchase = () => {
    console.log(this.state.runningTotal)
  }

  handleClick = (event) => {
    let id = event.target.id
    this.setState({
      // whichComponent: this.showComponent(id),
      whichCCComponent: this.showCCComponent(id)
    })
  }

  // case switch for rendering the right component on the gameboard
  // showComponent(id) {
  //   switch (id) {
  //     case 'garden':
  //       return <div className="Garden">
  //         {this.state.watered}
  //         <Garden />
  //       </div>
  //     case 'supply':
  //       return <SupplyStore />
  //     case 'stand':
  //       return <SellingStand />
  //     case 'kitchen':
  //       return <div className="Kitchen">
  //         <Kitchen />
  //         <KitchenButton />
  //       </div>
  //     case 'startover':
  //       return <div className="StartScreen">
  //         <div className="start-border">
  //           <StartScreen />
  //           <StartScreenButtons />
  //         </div>
  //       </div>
  //     case 'help':
  //       return <Help />
  //     case 'start-over':
  //       return <LogIn
  //         playWithProduce={this.playWithProduce}
  //         pickProduce={this.pickProduce} />
  //     case 'nevermind':
  //       return <div className="Garden">
  //         {this.state.watered}
  //         <Garden />
  //       </div>
  //     case 'go-to-market':
  //       return <SellingStand />
  //     case 'lets-play':
  //       return <div className="Garden">
  //         {this.state.watered}
  //         <Garden />
  //       </div>
  //     default:
  //       return null
  //   }
  // }

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
      runningTotal } = this.state
    console.log(buyEggs, buySugar, buyFlour, buyMilk)
    console.log('eggTotal', typeof eggTotal)
    console.log('milkTotal', milkTotal)
    console.log('flourTotal', typeof flourTotal)
    console.log('sugarTotal', sugarTotal)
    console.log('runningTotal', runningTotal)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <img src={Rooster}
              alt="rooster logo"
              width="70px"
              className="rooster" />CFK Market Stand</h1>
        </header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/start-over',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="startover"
              // onClick={this.handleClick}
            >Start Over
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/garden',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="garden"
              // onClick={this.handleClick}
            >Garden
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/store',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="supply"
              // onClick={this.handleClick}
            >Supply Store
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/kitchen',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="kitchen"
              // onClick={this.handleClick}
            >Kitchen
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/market',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="stand"
              // onClick={this.handleClick}
            >Market
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
              to={{
                pathname: '/help',
                produceProps:{
                  producePicked: this.state.producePicked
                }
              }}
              id="help"
              // onClick={this.handleClick}
            >Help
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter />
              {/* {this.state.whichCCComponent} */}
              <Router basename={process.env.PUBLIC_URL}>
                {/* <Switch> */}
                {/* <Route path="/" exact component={LogIn} /> */}
                {/* <Route path="/start-over" exact component={StartScreen} /> */}
                <div>
                  {/* <Route path="/garden" exact render={(props) => <CCGarden {...props}
                    playWithProduce={this.playWithProduce}
                    pickProduce={this.pickProduce}
                    producePicked={this.state.producePicked}
                    onClick={this.tendGarden}
                  />} /> */}
                  <Route path="/garden" exact component={CCGarden} />
                  {/* <Route path='/store' exact render={(props) => <CCStore {...props}
                    runningTotal={this.state.runningTotal}
                    makePurchase={this.makePurchase}
                  />} /> */}
                  <Route path='/store' exact component={CCStore} />

                  {/* <Route path="/kitchen" exact render={(props) => <CCKitchen {...props}
                    selectedProduce={this.state.producePicked}
                    showBar={this.showBar}
                  // playWithProduce={this.playWithProduce}
                  // pickProduce={this.pickProduce}
                  />} /> */}
                  <Route path='/kitchen' exact component={CCKitchen} />

                  {/* <Route path='/market' exact render={(props) => <CCMarket {...props}
                    readyToSell={this.state.readyToSell}
                    startSelling={this.startSelling} 
                  />} /> */}
                  <Route path='/market' exact component={CCMarket} />

                  {/* <Route path='/help' exact component={Help} /> */}
                  {/* </Switch> */}
                </div>
              </Router>
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
                {/* {this.showComponent} */}
                <Router basename={process.env.PUBLIC_URL}>
                  <div>
                    {/* <Switch> */}
                    {/* <Route path="/" exact render={(props) => <LogIn {...props}
                    playWithProduce={this.playWithProduce}
                    pickProduce={this.pickProduce}
                  />} /> */}
                    <Route path='/' exact component={LogIn} />
                    <Route path="/start-over" exact component={StartScreen} />
                    {/* <Route path="/garden" exact render={(props) => <Garden {...props}
                    playWithProduce={this.playWithProduce}
                    pickProduce={this.pickProduce}
                    producePicked={this.state.producePicked}
                    weeded={this.state.weeded}
                    harvested={this.state.harvested}
                    watered={this.state.watered}
                  />} /> */}
                    <Route path="/garden" exact component={Garden} />
                    {/* <Route path='/store' exact render={(props) => <SupplyStore {...props}
                    buySugar={this.state.buySugar}
                    buyFlour={this.state.buyFlour}
                    buyMilk={this.state.buyMilk}
                    buyEggs={this.state.buyEggs}
                    addToCart={this.addToCart}
                  />} /> */}
                    <Route path='/store' exact component={SupplyStore} />
                    {/* <Route path="/kitchen" exact render={(props) => <Kitchen {...props}
                    producePicked={this.props.producePicked}
                    bakeBtn={this.state.bakeBtn}
                    goToMarket={this.goToMarket}
                  />} /> */}
                    <Route path='/kitchen' exact component={Kitchen} />
                    <Route path='/market' exact component={SellingStand} />
                    <Route path='/help' exact component={Help} />
                    {/* </Switch> */}
                  </div>
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
