import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../App.css'
import GardenGrid from './GardenGrid'
import Water from '../../../images/water.png'

class Garden extends Component {
  state = {
    producePicked: ''
  }
  componentDidMount() {
    if (this.props.location && this.props.location.produceProps) {
      const crop = this.props.location.produceProps.producePicked
      this.setState({producePicked: crop})
      this.props.grabCrop(crop)
    }
  }
  render() {
    console.log(this.props)
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
  grabCrop: PropTypes.func
}

export default Garden
