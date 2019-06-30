import React from 'react'
import '../../../App.css'
import PropTypes from 'prop-types'


class CCGarden extends React.Component {
  state = {
    buttonReady: true
  }
  render() {
    return (
      <div className="CCGarden">
        <button className={ this.props.watered ? 'hideBtn' : 'btn' }
          data-valuename="waterBtn"
          onClick={this.props.onClick}>Water</button>

        <button className={ this.props.weeded ? 'hideBtn' : 'btn' }
          data-valuename="weedBtn"
          onClick={this.props.onClick}>Weed</button>

        <button className={ this.state.buttonReady ? 'showBtn btn' : 'hideBtn' }
          data-valuename="harvestBtn"
          onClick={this.props.onClick}>Harvest</button>
      </div>
    )
  }
}

CCGarden.propTypes = {
  watered: PropTypes.bool,
  weeded: PropTypes.bool,
  onClick: PropTypes.func
}

export default CCGarden