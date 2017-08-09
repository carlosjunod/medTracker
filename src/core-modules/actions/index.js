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

export const editMed = (name, brand, mg, alarm, i) =>{
  return {
    type: 'EDIT_MED',
    i,
    name,
    brand,
    mg,
    alarm,
  }
}

export const delMed = (id) =>{
  return {
    type: 'DELETE_MED',
    id,
  }
}

export const setAlarm = (med) =>{
  return {
    type: 'SET_ALARM',
    med,
  }
}

export const openModal = () =>{
  console.log('HEREE MODAL!!!')
  return {
    type: 'OPEN_MODAL',
  }
}

export const closeModal = () =>{
  console.log('HEREE MODAL CLOSE!!!')
  return {
    type: 'CLOSE_MODAL',
  }
}

export const editModal = (name, brand, mg, alarm, i) =>{
  return {
    type: 'EDIT_MODAL',
    i,
    name,
    brand,
    mg,
    alarm,
  }
}
