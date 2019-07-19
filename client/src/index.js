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

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, 
  document.getElementById('root'))
registerServiceWorker()

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()