// ui redducer
const oringalState = require('../data/medicines.json')

const uiReducer = ( state = oringalState.ui, action ) => {
  switch (action.type) {
  case 'OPEN_MODAL':
    // console.log('OPEN MODAL!!!!!!')
    return Object.assign({}, state, {
      'showModal': true,
    })
  case 'CLOSE_MODAL':
    // console.log('CLOSE MODAL!!!!!!')
    return Object.assign({}, state, {
      'showModal': false,
      'edditig': null,
    })
  case 'EDIT_MODAL':
    console.log('EDIT MODAL UI!!!!!!')
    console.log('EDDITING INFO: ', action.name, action.brand, action.mg, action.alarm, action.i)
    return Object.assign({}, state, {
      'showModal': true,
      'edditig': {
        name: action.name,
        brand: action.brand,
        mg: action.mg,
        alarm: action.alarm,
        i: action.i,
      },
    })
  default:
    return state
  }
}
export default uiReducer
