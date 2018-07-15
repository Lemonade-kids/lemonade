import React, { Component } from 'react';
import '../../App.css';
import Weeds from '../Weeds';


class CCGarden extends Component {
    constructor(props) {
        super(props);
        this.hideWeeds = this.hideWeeds.bind(this);
    }
    hideWeeds(event){
        let action = event.target.action;
        this.setState({
            doAction: this.whichAction(action)
        })
        //console.log(props);
    }

  render() {
    return (
      <div className="CCGarden">

      <button className="btn" id="water" action="water" onClick={this.hideWeeds.bind(this)}>Water</button>
        <button className="btn" id="weed" action="weed"  onClick={this.hideWeeds.bind(this)}>Weed</button>
        <button className="btn" id="harvest" action="harvest" onClick={this.hideWeeds.bind(this)}>Harvest</button>
      </div>
    );
  }
}

export default CCGarden;