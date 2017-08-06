import {combineReducers} from 'redux'

// import all reducers eplClub in example
import medicines from './medicines'

const medsReducers = combineReducers({
  medicines,
})

export default medsReducers
