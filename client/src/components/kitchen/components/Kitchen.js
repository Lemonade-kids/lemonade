import React, { Component } from 'react'
import '../../../App.css'
import Oven from './Oven'
import Counter from './Counter'
import KitchenButton from './KitchenButton'
import LoadingBar from './loadingBar'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class Kitchen extends Component {
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
    return (
      <div className='Kitchen'>
        {this.props.bakeBtn ? <LoadingBar /> : null }
        {this.props.bakeBtn ? 
          <NavLink to={{
            pathname: '/market',
            produceProps:{
              producePicked: this.props.producePicked
            }
          }}>
            <KitchenButton />
          </NavLink> : null }
        <div className="workspace">
          {this.state.producePicked === 'lemon' ? <Counter /> : <Oven />}
        </div>
      </div>
    )
  }
}

Kitchen.propTypes = {
  bakeBtn: PropTypes.bool,
  producePicked: PropTypes.string,
  goToMarket: PropTypes.bool,
  location: PropTypes.object,
  grabCrop: PropTypes.func
}

export default Kitchen