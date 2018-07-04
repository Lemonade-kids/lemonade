import React, { Component } from 'react';
import '../../App.css';

class CCGarden extends Component {
  render() {
    return (
      <div className="CCGarden">
      
      <button className="btn">Water</button>
        <button className="btn">Weed</button>
        <button className="btn">Harvest</button>
      </div>
    );
  }
}

export default CCGarden;