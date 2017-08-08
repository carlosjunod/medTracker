const medsData = {
  'meds': [
  	{
  		'name': 'Ibuprofen',
  		'brand': 'Advil',
  		'mg': '600',
  		'alarm': '2pm',
  	},
  	{
  		'name': 'another',
  		'brand': 'lalla',
  		'mg': '600',
  		'alarm': '3pm',
  	},
  ],
}

// medicine redducer
const medicineReducer = ( state = medsData.meds, action ) => {
  switch (action.type) {
  case 'GET_MEDS':
    return Object.assign({}, state, {
      meds: medsData.meds,
    })
  case 'ADD_MED':
    return [...state, {
      'name': action.name,
      'brand': action.brand,
      'mg': action.mg,
      'alarm': action.alarm,
    }]
  default:
    return state
  }
}
export default medicineReducer
