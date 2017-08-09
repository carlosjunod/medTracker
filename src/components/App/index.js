import React from 'react'
import './App.css'


import MedicneList from '../MedicineList/'
import Header from '../Header/'
import Admin from '../Admin/'
import Modal from 'react-modal'


// const prettyTime = (sec)=>{
//   Math.floor(sec/60) + ':' + ('0' + sec % 60).slice(-2)
// }

const App = ({
  meds,
  ui,
  getMeds,
  addMed,
  editMed,
  delMed,
  setAlarm,
  openModal,
  closeModal,
  editModal,

}) => (
  <div className="wrapper">
    <Header className="header" meds={meds}/>
    <MedicneList meds={meds} delMed={delMed} editMed={editMed} editModal={editModal}/>

    <button onClick={openModal} className="add-med" >add med</button>

    <Modal isOpen={ui.showModal} overlayClassName="modal-overlay" className="modal" contentLabel="add medicine">
      <Admin addMed={addMed} editMed={editMed} edditing={ui.edditig} closeModal={closeModal}/>
      <button onClick={closeModal} className="close-modal">close</button>
    </Modal>
  </div>
)

export default App
