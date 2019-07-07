import React, { Component } from 'react'
import '../../../App.css'
import Oven from './Oven'
import Counter from './Counter'
import KitchenButton from './KitchenButton'
import LoadingBar from './loadingBar'
import PropTypes from 'prop-types'


class Kitchen extends Component {
  render() {
    console.log(this.props.bakeBtn)
    return (
      <div className='Kitchen'>
        {this.props.bakeBtn ? <LoadingBar /> : null }
        {this.props.bakeBtn ? <KitchenButton goToMarket={this.props.goToMarket} /> : null }
        <div className="workspace">
          {this.props.producePicked === 'lemon' ? <Counter /> : <Oven />}
        </div>
      </div>
    )
  }
}

Kitchen.propTypes = {
  bakeBtn: PropTypes.bool,
  producePicked: PropTypes.string,
  goToMarket: PropTypes.bool
}

export default Kitchen