import React, { Component } from 'react'
import '../../App.css'
import Sugar from '../../images/sugar.png'
import Flour from '../../images/flour.png'
import Milk from '../../images/milk.png'
import Eggs from '../../images/eggs.png'



class StoreGrid extends Component {
  render() {
    return (
      <div className="StoreGrid">
        <div className="grid-container-store store-grid">
          <div className="grid-item-store">
            <img src={Sugar} alt="sugar" className="sugar" />
            <p>How many cups?</p>
            <input className="form-control" type="text" placeholder="0" />
          </div>
          <div className="grid-item-store">
          <img src={Flour} alt="flour" className="flour" />
            <p>How many pounds?</p>
            <input className="form-control" type="text" placeholder="0" />
          </div>
          <div className="grid-item-store">
          <img src={Milk} alt="milk" className="milk" />
            <p>How many pints?</p>
            <input className="form-control" type="text" placeholder="0" />

          </div>
          <div className="grid-item-store">
          <img src={Eggs} alt="eggs" className="eggs" />
            <p>How many?</p>
            <input className="form-control" type="text" placeholder="0" />
          </div>
        </div>

      </div>
    )
  }
}

export default StoreGrid