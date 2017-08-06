export const getMeds = () =>{
  return {
    type: 'GET_MEDS',
  }
}

export const addMed = (med) =>{
  console.log('here');
  return {
    type: 'ADD_MED',
    med,
  }
}

export const editMed = (med) =>{
  return {
    type: 'EDIT_MED',
    med,
  }
}

export const delMed = (med) =>{
  return {
    type: 'DELETE_MED',
    med,
  }
}

export const setAlarm = (med) =>{
  return {
    type: 'SET_ALARM',
    med,
  }
}
