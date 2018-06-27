import React, { Component } from 'react';
import './App.css';
import Garden from './components/Garden';
import SellingStand from './components/SellingStand';
import SupplyStore from './components/SupplyStore';
import Kitchen from './components/Kitchen';
import ControlCenter from './components/ControlCenter';


class App extends Component {
  constructor(props) {
    super(props);
    this.showComponent = this.showComponent.bind(this);
  }
  state = { whichComponent: <Garden /> };

  handleClick(event) {
    let id = event.target.id;
    this.setState({
      whichComponent: this.showComponent(id)
    });
  }
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
      default:
        return null;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lemonade Stand</h1>
        </header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <p className="nav-link active" id="startover">Start Over</p>
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
            <p className="nav-link" id="help">Help</p>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ControlCenter">
              <ControlCenter />
            </div>
            <div className="col-sm-9">
              <div className="Gameboard">
              {this.state.whichComponent}
                {/* will apply a switch statement here in order to know which component to render? 
                <Garden />
                <SupplyStore />
                <SellingStand /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
