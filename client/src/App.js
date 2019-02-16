import React, { Component } from 'react';
import './App.css';
import Rooster from './images/rooster.png';
import Garden from './components/Garden';
import SellingStand from './components/SellingStand';
import SupplyStore from './components/SupplyStore';
import Kitchen from './components/Kitchen';
import ControlCenter from './components/ControlCenter';
import StartScreen from './components/StartScreen';
import LogIn from './components/LogIn';
import Help from './components/Help';
import CCGarden from './components/controlcentercomponents/CCGarden';
import CCKitchen from './components/controlcentercomponents/CCKitchen';
import CCMarket from './components/controlcentercomponents/CCMarket';
import CCStore from './components/controlcentercomponents/CCStore';
//import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Dirt from './images/dirt.png';
import StartScreenButtons from './components/StartScreenButtons';
import KitchenButton from './components/KitchenButton';
//import LetsPlayButton from './components/LetsPlayButton';
import CCGardenHarvestButton from './components/controlcentercomponents/CCGardenHarvestButton';
import CCGardenWeedButton from './components/controlcentercomponents/CCGardenWeedButton';
import CCGardenWaterButton from './components/controlcentercomponents/CCGardenWaterButton';
import Water from './images/water.png';


class App extends Component {
  constructor(props) {
    super(props); // must call super or else 'this' will be uninitialized
    this.showComponent = this.showComponent.bind(this); // bind ties the onclick to 'this'
  }
  state = { whichComponent: <LogIn /> };

  handleClick(event) { // this is what happens when the click is clicked
    let id = event.target.id;
    this.setState({
      whichComponent: this.showComponent(id), // look! can call TWO functions with one onclick!
      whichCCComponent: this.showCCComponent(id)

    });
  }

  waterGarden(event) {
    let id = event.target.id;
    if (id === 'water') {
      this.setState({
        clicked: true
        });
        return <img src= { Water } className="water" alt="water" />;
    }
  }

  weedGarden(event) {
    let id = event.target.id;
    if (id === 'weed') {
      return;
    }
  }

  harvestGarden(event) {
    let id = event.target.id;
    if (id === 'harvest') {
      return;
    }
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
        return <SupplyStore />;
      case 'stand':
        return <SellingStand />;
      case 'kitchen':
        return <div className="Kitchen">
          <Kitchen />
          <KitchenButton onClick={this.handleClick.bind(this)} />
        </div>;
      case 'startover':
        return <div className="StartScreen">
          <div className="start-border">
            <StartScreen />
            <StartScreenButtons onClick={this.handleClick.bind(this)} />
          </div>
        </div>;
      case 'help':
        return <Help />;
      case 'start-over':
        return <LogIn />;
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
        return null;
    }
  }
  // case switch for rendering the component-specific buttons in control center
  showCCComponent(id) {
    switch (id) {
      case 'garden':
        return <div className="CCGarden">
          <CCGarden />
          <CCGardenWaterButton onClick={this.waterGarden.bind(this)} />
          <CCGardenWeedButton onClick={this.weedGarden.bind(this)} />
          <CCGardenHarvestButton onClick={this.harvestGarden.bind(this)} />
        </div>;
      case 'supply':
        return <CCStore />;
      case 'stand':
        return <CCMarket />;
      case 'kitchen':
        return <CCKitchen />
      case 'go-to-market':
        return <CCMarket />
      case 'nevermind':
        return <div className="CCGarden">
          <CCGarden />
          <CCGardenWaterButton onClick={this.waterGarden.bind(this)} />
          <CCGardenWeedButton onClick={this.weedGarden.bind(this)} />
          <CCGardenHarvestButton onClick={this.harvestGarden.bind(this)} />
        </div>;
      default:
        return null;
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
            <p className="nav-link" id="startover" onClick={this.handleClick.bind(this)}>Start Over</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="garden" onClick={this.handleClick.bind(this)}>Garden</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="supply" onClick={this.handleClick.bind(this)}>Supply Store</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="kitchen" onClick={this.handleClick.bind(this)}>Kitchen</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="stand" onClick={this.handleClick.bind(this)}>Market</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" id="help" onClick={this.handleClick.bind(this)}>Help</p>
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
    );
  }
}

export default App;
