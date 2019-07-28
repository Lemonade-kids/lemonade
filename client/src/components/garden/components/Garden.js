import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../App.css'
import GardenGrid from './GardenGrid'
import Water from '../../../images/water.png'

class Garden extends Component {
  state = {
    producePicked: '',
    bank: 0,
    cropAmount: 0
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      const bank = this.props.location.produceProps.bank
      const cropAmount = this.props.location.produceProps.cropAmount
      const temperature = this.props.location.produceProps.temperature
      this.setState({producePicked: crop, bank, cropAmount})
      this.props.grabData(crop, bank, cropAmount, temperature)
    }
  }
  render() {
    const crop = this.props.location.produceProps ? this.props.location.produceProps.producePicked : null
    return (
      crop !== null ?
        <div className="grid-container garden-grid">
          {this.props.watered ? <img src={Water} className={'water'} /> : null}
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
          <div className="grid-item grid-item-garden">
            <GardenGrid
              producePicked={crop}
              weeded={this.props.weeded}
              harvested={this.props.harvested}
              watered={this.props.watered} />
          </div>
        </div> : <div>Something went wrong.</div>
    )
  }
}

Garden.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool,
  weeded: PropTypes.bool,
  watered: PropTypes.bool,
  location: PropTypes.object,
  grabData: PropTypes.func
}

export default Garden
