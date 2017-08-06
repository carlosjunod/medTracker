const medicinesData = require('../data/medicines.json')

// medicine redducer
// Original state :  medicinesData.medicines

// const initialState = {}
const initialState = medicinesData.medicines
const medicineReducer = ( state = initialState, action ) => {
  switch (action.type) {
  case 'GET_MEDS':
    return Object.assign({}, state, {
      medicines: initialState,
    })
  case 'ADD_MED':
    return Object.assign({}, state, {
    // do something
    })
  default:
    return state
  }
}
export default medicineReducer
