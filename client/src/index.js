import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './store/reducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer)

// may have to switch router back to wrapping only app
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, 
  document.getElementById('root'))
registerServiceWorker()

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()