const oringalState = require('../data/medicines.json')

// medicine redducer
const medicineReducer = ( state = oringalState.meds, action ) => {
  switch (action.type) {
  case 'GET_MEDS':
    return Object.assign({}, state, {
      meds: oringalState.meds,
    })
  case 'ADD_MED':
    const timestamp = Date.now()
    return [...state, {
      'id': timestamp,
      'name': action.name,
      'brand': action.brand,
      'mg': action.mg,
      'alarm': action.alarm,
    }]
  case 'DELETE_MED':
    return [
      ...state.slice(0, action.id),
      ...state.slice(action.id + 1),
    ]
  case 'EDIT_MED':
    const edMed = [...state]
    edMed[action.i].name = action.name
    edMed[action.i].brand = action.brand
    edMed[action.i].mg = action.mg
    edMed[action.i].alarm = action.alarm

    return [
      // ...state,
      ...state.slice(0, action.i),
      edMed[action.i],
      ...state.slice(action.i + 1),
    ]
  case 'EDIT_MODAL':
    return [
      ...state,
    ]
  default:
    return state
  }
}
export default medicineReducer
