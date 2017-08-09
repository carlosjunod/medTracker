import React from 'react'
import Item from '../Item/'

const MedicneList = ({meds, delMed, editMed, editModal}) => (
  <section className="medicine-list">
    <section className="medicnes">
      <h2>My medicines</h2>
      <ul>
        {/* {console.log('HERE MEDICINES 💊->', meds)} */}
        {
          meds.map( (med, i) =>
            <Item key={i} i={i} med={med} delMed={delMed} editMed={editMed} editModal={editModal}> {med.name} </Item>
          )
        }
      </ul>
    </section>
  </section>
)

export default MedicneList
