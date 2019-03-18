import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import '../../../App.css'

class KitchenButton extends Component {
  render() {
    return (
      <div className="KitchenButton">
        {/* <Link to={'/market'}> */}
          <button
            onClick={this.props.goToMarket}
            className='btn'
            id="go-to-market">Let's go to Market!</button>
        {/* </Link> */}
      </div>
    )
  }
}

export default KitchenButton