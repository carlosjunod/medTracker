import {combineReducers} from 'redux'

// import all reducers eplClub in example
import meds from './medicines'

const medsReducers = combineReducers({
  meds,
})

export default medsReducers
