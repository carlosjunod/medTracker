import {combineReducers} from 'redux'

// import all reducers eplClub in example
import meds from './medicines'
import UI from './ui'

const medsReducers = combineReducers({
  meds,
  UI,
})

export default medsReducers
