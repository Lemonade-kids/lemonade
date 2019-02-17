import React, { Component } from 'react'
import '../App.css'
import GardenGrid from './GardenGrid'


class Garden extends Component {
  render() {
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

export default Garden
