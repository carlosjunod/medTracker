import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MedList from './containers/MedList'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import medicineReducer from './core-modules/reducers'

// Middleware to save in localStorage
import { loadState, saveState } from './localStorage'
const persistedState = loadState()

const store = createStore(medicineReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// saving in local storage
store.subscribe( () => {
  saveState(store.getState())
} )

ReactDOM.render(
  <Provider store={store} >
    <MedList />
  </Provider>, document.getElementById('root')
)
