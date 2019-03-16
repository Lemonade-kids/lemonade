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
    let tmp = ''

    switch (seed) {
      case 'blueberry':
        tmp = BlueberryBush
        break
      case 'lemon':
        tmp = LemonTree
        break
      case 'squash':
        tmp = SquashPlant
        break
      default:
        tmp = Sprout
        break
    }

    this.setState({ crop: tmp, className: 'produce-large' })
  }

  grow(seed) {
    setTimeout(() => {
      this.whichCrop(seed)
    }, 7000)
  }

  render() {
    return (
      <div className="Produce">
        <img src={this.props.harvested ? null : this.state.crop}
          className={this.state.className}
          alt={this.tmp} />
      </div>
    )
  }
}

Produce.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool
}

export default Produce