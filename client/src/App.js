import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import {connect} from 'react-redux'
import Rooster from './images/rooster.png'
import Garden from './components/garden/components/Garden'
import SellingStand from './components/market/components/SellingStand'
import SupplyStore from './components/supplyStore/SupplyStore'
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
    bakeBtn: false
  }
  /** pick produce, set state with picked, pass on to props with which one picked
   * grows in garden, gets made in kitchen, sells-- need to figure out how flow happens, could use react router & window.loc.replace
   */
  pickProduce = (event) => {
    this.setState({
      // producePicked: event.target.dataset.valuename
      producePicked: event.target.value
    })
    console.log(this.state.producePicked)
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
    console.log('button clicked!')
  }

  handleClick = (event) => { // this is what happens when the click is clicked
    let id = event.target.id
    this.setState({
      whichComponent: this.showComponent(id), // look! can call TWO functions with one onclick!
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
        return <CCStore />
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
        return null
    }
  }

  render() {
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
            <a className="nav-link"
              href='/start-over'
              id="startover"
              onClick={this.handleClick}>Start Over</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
              href='/garden'
              id="garden"
              onClick={this.handleClick}>Garden</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
              href='/store'
              id="supply"
              onClick={this.handleClick}>Supply Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
              href='/kitchen'
              id="kitchen"
              onClick={this.handleClick}>Kitchen</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
              href='/market'
              id="stand"
              onClick={this.handleClick}>Market</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
              href='/help'
              id="help"
              onClick={this.handleClick}>Help</a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter />
              {/* {this.state.whichCCComponent} */}
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                  {/* <Route path="/" exact component={LogIn} /> */}
                  {/* <Route path="/start-over" exact component={StartScreen} /> */}
                  <Route path="/garden" exact render={(props) => <CCGarden {...props}
                    playWithProduce={this.playWithProduce}
                    pickProduce={this.pickProduce}
                    onClick={this.tendGarden}
                  />} />
                  <Route path='/store' exact component={CCStore} />
                  <Route path="/kitchen" exact render={(props) => <CCKitchen {...props}
                    selectedProduce={this.state.producePicked}
                    showBar={this.showBar}
                  // playWithProduce={this.playWithProduce}
                  // pickProduce={this.pickProduce}
                  />} />
                  <Route path='/market' exact component={CCMarket} />
                  {/* <Route path='/help' exact component={Help} /> */}
                </Switch>
              </BrowserRouter>
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
                {/* {this.showComponent} */}
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                  <Switch>
                    <Route path="/" exact render={(props) => <LogIn {...props}
                      playWithProduce={this.playWithProduce}
                      pickProduce={ () => this.props.chooseProduce()}
                    />} />
                    <Route path="/start-over" exact component={StartScreen} />
                    <Route path="/garden" exact render={(props) => <Garden {...props}
                      playWithProduce={this.playWithProduce}
                      pickProduce={this.pickProduce}
                      producePicked={this.props.producePicked}
                      weeded={this.state.weeded}
                      harvested={this.state.harvested}
                      watered={this.state.watered}
                    />} />
                    <Route path='/store' exact component={SupplyStore} />
                    <Route path="/kitchen" exact render={(props) => <Kitchen {...props}
                      producePicked={this.props.producePicked}
                      bakeBtn={this.state.bakeBtn}
                    // playWithProduce={this.playWithProduce}
                    // pickProduce={this.pickProduce}
                    />} />
                    <Route path='/market' exact component={SellingStand} />
                    <Route path='/help' exact component={Help} />
                  </Switch>
                </BrowserRouter>
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
  return{
    producePicked: state.producePicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
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
