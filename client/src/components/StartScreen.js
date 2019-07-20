import React from 'react'
import '../App.css'
import StartScreenButtons from './StartScreenButtons'
import { withRouter } from 'react-router-dom'

class StartScreen extends React.Component {
  render() {
    return (
      <div className='startscreen'>
        <p className='start'>{`Are you sure you want to start over?
      You'll lose any progress you've made so far!`}</p>
        <StartScreenButtons />
      </div>
    )
  }
}

export default withRouter(StartScreen)