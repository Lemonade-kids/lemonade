import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../App.css'
import GardenGrid from './GardenGrid'


class Garden extends Component {
  render() {
    console.log(this.props.producePicked)
    return (
      <div className="grid-container garden-grid">
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
        <div className="grid-item grid-item-garden">
          <GardenGrid
            producePicked={this.props.producePicked}
            weeded={this.props.weeded}
            harvested={this.props.harvested}
            watered={this.props.watered} />
        </div>
      </div>
    )
  }
}

Garden.propTypes = {
    producePicked: PropTypes.string,
    harvested: PropTypes.bool,
    weeded: PropTypes.bool,
    watered: PropTypes.bool
  }

export default Garden
