import React, { Component } from 'react'
import '../../../App.css'
import {people} from './data'
import PropTypes from 'prop-types'
import {randomizePeople} from '../../../modules/marketController'

class People extends Component {
  state = {
    customers: []
  }
randomize = (people) => randomizePeople(people)

componentDidMount() {
  let {customers} = this.state
  const {amount} = this.props
  if (amount) {
    customers = this.randomize(people)
    // customers = customers.slice(0, amount)
    console.log('custys', customers)
    this.setState({customers})
  }
}
render() {
  // const {amount} = this.props 
  const peeps = this.state.customers
  console.log('hiiiiiiiii', peeps, this.state.customers)
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