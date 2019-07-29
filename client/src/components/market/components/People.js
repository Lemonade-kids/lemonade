import React, { Component } from 'react'
import '../../../App.css'
import {people} from './data'
import PropTypes from 'prop-types'

class People extends Component {

  render() {
    const {amount} = this.props 
    const peeps = people.slice(0, amount)
    console.log(amount)
    return (
      <div className="People">
        {peeps.map(i => {return(
          <img 
            key={`p${peeps.indexOf(i)}`} 
            src={i} 
            className='peeps' 
            alt='person' 
            id={`p${peeps.indexOf(i)}`} 
          />)
        })
        }
      </div>
    )
  }
}

People.propTypes = {
  amount: PropTypes.number
}

export default People