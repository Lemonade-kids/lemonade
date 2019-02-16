import React from 'react';
import '../../App.css';


class CCGarden extends React.Component {
  render() {
    console.log(this.props.onClick)
    return (
      <div className="CCGarden"> 
      <button className="btn" data-valuename="waterBtn" onClick={this.props.onClick}>Water</button>
        <button className="btn" data-valuename="weedBtn" action="weed"  onClick={this.props.onClick}>Weed</button>
        <button className="btn" data-valuename="harvestBtn" action="harvest" onClick={this.props.onClick}>Harvest</button>
      </div>
    );
  }
}

export default CCGarden;