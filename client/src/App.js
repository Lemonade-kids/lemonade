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

  // case switch for rendering the right component on the gameboard
  showComponent(id) { 
    switch (id) {
      case 'garden':
        return <Garden />;
      case 'supply':
        return <SupplyStore />;
      case 'stand':
        return <SellingStand />;
      case 'kitchen':
        return <Kitchen />;
      case 'startover':
        return <StartScreen />;
      case 'help':
        return <Help />;
      default:
        return null;
    }
  }
  // case switch for rendering the component-specific buttons in control center
  showCCComponent(id) {
    switch (id) {
      case 'garden':
      return <CCGarden />;
      case 'supply':
      return <CCStore />;
      case 'stand':
      return <CCMarket />;
      case 'kitchen':
      return <CCKitchen />
      default:
      return null;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><img src={ Rooster } alt="rooster logo" width="70px" className="rooster" />CFK Market Stand</h1>
          <h1 className="App-title">Lemonade Stand</h1>
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
            <p className="nav-link" id="help">Help</p>
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
      </div>
    );
  }
}

export default App;
