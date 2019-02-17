import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Rooster from './images/rooster.png'
import Garden from './components/Garden'
import SellingStand from './components/SellingStand'
import SupplyStore from './components/SupplyStore'
import Kitchen from './components/Kitchen'
import ControlCenter from './components/ControlCenter'
import StartScreen from './components/StartScreen'
import LogIn from './components/LogIn'
import Help from './components/Help'
import CCGarden from './components/controlcentercomponents/CCGarden'
import CCKitchen from './components/controlcentercomponents/CCKitchen'
import CCMarket from './components/controlcentercomponents/CCMarket'
import CCStore from './components/controlcentercomponents/CCStore'
//import LetsPlayButton from './components/LetsPlayButton';
import water from './images/water.png'


class App extends React.Component {
  state = {
    whichComponent: '',
    producePicked: 'squash',
    watered: false,
    weeded: false,
    harvested: false
  }
  /** pick produce, set state with picked, pass on to props with which one picked
   * grows in garden, gets made in kitchen, sells-- need to figure out how flow happens, could use react router & window.loc.replace
   */
  pickProduce = (event) => {
    this.setState({
      producePicked: event.target.dataset.valuename
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

  handleClick = (event) => { // this is what happens when the click is clicked
    let id = event.target.id
    this.setState({
      whichComponent: this.showComponent(id), // look! can call TWO functions with one onclick!
      whichCCComponent: this.showCCComponent(id)

    })
  }
  // buttons in control center
  showCCComponent(id) {
    switch (id) {
      case 'garden':
        return <div className="CCGarden">
          <CCGarden onClick={this.tendGarden} />
        </div>
      case 'supply' || window.location.pathname.includes('/store'):
        return <CCStore />
      case 'stand' || window.location.pathname.includes('/market'):
        return <CCMarket />
      case 'kitchen' || window.location.pathname.includes('/kitchen'):
        return <CCKitchen />
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
                      pickProduce={this.pickProduce}
                    />} />
                    <Route path="/start-over" exact component={StartScreen} />
                    <Route path="/garden" exact render={(props) => <Garden {...props}
                      playWithProduce={this.playWithProduce}
                      pickProduce={this.pickProduce}
                      producePicked={this.state.producePicked}
                      weeded={this.state.weeded}
                      harvested={this.state.harvested}
                      watered={this.state.watered}
                    />} />
                    <Route path='/store' exact component={SupplyStore} />
                    <Route path="/kitchen" exact render={(props) => <Kitchen {...props}
                      selectedProduce={this.state.producePicked}
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
          <p >Developed by the <a className="footer" href="https://github.com/Lemonade-kids/lemonade">Lemonade Kids</a> for <a className="footer" href="https://customfitkids.us">Custom Fit Kids</a>.</p>
        </footer>
      </div>
    )
  }
}

export default App
