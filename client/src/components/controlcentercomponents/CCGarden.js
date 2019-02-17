import React from 'react'
import '../../App.css'


class CCGarden extends React.Component {
  render() {
    return (
      <div className="CCGarden">
        <button className="btn"
          data-valuename="waterBtn"
          onClick={this.props.onClick}>Water</button>

        <button className="btn"
          data-valuename="weedBtn"
          onClick={this.props.onClick}>Weed</button>

        <button className="btn harvestBtn"
          data-valuename="harvestBtn"
          onClick={this.props.onClick}>Harvest</button>
      </div>
    )
  }
}

export default CCGarden