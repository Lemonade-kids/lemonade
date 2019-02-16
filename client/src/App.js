import React from 'react'
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
import './App.css'
import StartScreenButtons from './components/StartScreenButtons'
import KitchenButton from './components/KitchenButton'
//import LetsPlayButton from './components/LetsPlayButton';
import water from './images/water.png'


class App extends React.Component {
  state = {
    whichComponent: <LogIn playWithProduce={this.playWithProduce} pickProduce={this.pickProduce} />,
    producePicked: '',
    watered: false,
    weeded: false,
    harvested: false
  }
/** pick produce, set state with picked, pass on to props with which one picked
 * grows in garden, gets made in kitchen, sells-- need to figure out how flow happens, could use react router & window.loc.replace
 */
  pickProduce = () => {

  }

  tendGarden = (event) => {
    let id = event.target.dataset.valuename
    if (id === 'waterBtn') {
      // console.log('watered')
      this.setState({
        watered: true
      })
      return <img src={water} className="water" alt="water" />
    }
    if (id === 'weedBtn') {
      // console.log('weeded')
    }
    if (id === 'harvestBtn') {
      // console.log('harvested')
    }
  }

  handleClick = (event) => { // this is what happens when the click is clicked
    let id = event.target.id
    this.setState({
      whichComponent: this.showComponent(id), // look! can call TWO functions with one onclick!
      whichCCComponent: this.showCCComponent(id)

    })
  }

  // case switch for rendering the right component on the gameboard
  showComponent(id) {
    switch (id) {
      case 'garden':
        return <div className="Garden">
          {this.state.watered}
          <Garden />
        </div>
      case 'supply':
        return <SupplyStore />
      case 'stand':
        return <SellingStand />
      case 'kitchen':
        return <div className="Kitchen">
          <Kitchen />
          <KitchenButton />
        </div>
      case 'startover':
        return <div className="StartScreen">
          <div className="start-border">
            <StartScreen />
            <StartScreenButtons />
          </div>
        </div>
      case 'help':
        return <Help />
      case 'start-over':
        return <LogIn />
      case 'nevermind':
        return <div className="Garden">
          {this.state.watered}
          <Garden />
        </div>
      case 'go-to-market':
        return <SellingStand />
      case 'lets-play':
        return <div className="Garden">
          {this.state.watered}
          <Garden />
        </div>
      default:
        return null
    }
  }
  // case switch for rendering the component-specific 
  // buttons in control center
  showCCComponent(id) {
    switch (id) {
      case 'garden':
        return <div className="CCGarden">
          <CCGarden onClick={this.tendGarden} />
        </div>
      case 'supply':
        return <CCStore />
      case 'stand':
        return <CCMarket />
      case 'kitchen':
        return <CCKitchen />
      case 'go-to-market':
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
          <h1 className="App-title"><img src={Rooster} alt="rooster logo" width="70px" className="rooster" />CFK Market Stand</h1>
        </header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <p className="nav-link" id="startover" onClick={this.handleClick}>Start Over</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="garden" onClick={this.handleClick}>Garden</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="supply" onClick={this.handleClick}>Supply Store</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="kitchen" onClick={this.handleClick}>Kitchen</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="stand" onClick={this.handleClick}>Market</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="help" onClick={this.handleClick}>Help</p>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Control-Center">
              <ControlCenter />
              {this.state.whichCCComponent}
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
                {this.state.whichComponent}
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
