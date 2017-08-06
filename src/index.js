import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MedList from './containers/MedList'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import medicineReducer from './core-modules/reducers'

let store = createStore(medicineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store} >
    <MedList />
  </Provider>, document.getElementById('root')
)
