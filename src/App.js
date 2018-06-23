import React, { Component } from 'react';
import './App.css';
import Garden from './components/Garden';
import SellingStand from './components/SellingStand';
import SupplyStore from './components/SupplyStore';
import ControlCenter from './components/ControlCenter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lemonade Stand</h1>
        </header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">Start Over</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Garden</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Supply Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Selling Stand</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ControlCenter">
              <ControlCenter />
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
                {/* will apply a switch statement here in order to know which component to render?  */}
                <Garden />
                <SupplyStore />
                <SellingStand />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
