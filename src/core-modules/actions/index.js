export const getMeds = () =>{
  return {
    type: 'GET_MEDS',
  }
}

export const addMed = (name, brand, mg, alarm) =>{
  return {
    type: 'ADD_MED',
    name,
    brand,
    mg,
    alarm,
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
