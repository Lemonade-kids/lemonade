import React from 'react'
import '../App.css'
import StartScreenButtons from './StartScreenButtons'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class StartScreen extends React.Component {
  render() {
    return (
      <div className='startscreen'>
        <p className='start'>{`Are you sure you want to start completely over?
      You'll lose any progress you've made so far!`}</p>
        <StartScreenButtons />
      </div>
    )
  }
}

StartScreen.propTypes = {
  producePicked: PropTypes.string,
  harvested: PropTypes.bool,
  bank: PropTypes.number,
  cropAmount: PropTypes.number
}

export default withRouter(StartScreen)