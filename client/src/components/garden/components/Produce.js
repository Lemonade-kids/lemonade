import React, { Component } from 'react'
import '../../../App.css'
import Sprout from '../../../images/sprout.png'
import BlueberryBush from '../../../images/blueberrybush.png'
import LemonTree from '../../../images/lemontree.png'
import SquashPlant from '../../../images/squash.png'
import PropTypes from 'prop-types'

class Produce extends Component {
  state = {
    crop: Sprout, 
    className: 'produce-small'
  }
  constructor(props) {
    super(props)
    this.grow(this.props.producePicked)
  }

  whichCrop(seed) {
    let crop = ''

    switch (seed) {
    case 'blueberry':
      crop = BlueberryBush
      break
    case 'lemon':
      crop = LemonTree
      break
    case 'squash':
      crop = SquashPlant
      break
    default:
      crop = Sprout
      break
    }

    this.setState({ crop: crop, className: 'produce-large' })
  }

  grow(seed) {
    // make timer starting dependent on watering and weeding?
    setTimeout(() => {
      this.whichCrop(seed)
    }, 7000)
  }

  render() {
    const { className, crop } = this.state
    return (
      <div className="Produce">
        <img src={this.props.harvested ? null : crop}
          className={className}
          alt={crop} />
      </div>
    )
  }
}

Produce.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool
}

export default Produce