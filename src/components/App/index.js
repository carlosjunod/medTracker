import React from 'react'
import './App.css'


import MedicneList from '../MedicineList/'
import Header from '../Header/'
import Admin from '../Admin/'

// const prettyTime = (sec)=>{
//   Math.floor(sec/60) + ':' + ('0' + sec % 60).slice(-2)
// }

const App = ( {
  medicines,
  getMeds,
  addMed,
  editMed,
  delMed,
  setAlarm,
}) => (
  <div className="wrapper">
    <Header className="header"/>
    <MedicneList addMed={addMed}/>
    <Admin />
  </div>
)

export default App
