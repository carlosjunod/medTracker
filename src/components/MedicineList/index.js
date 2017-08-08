import React from 'react'

const MedicneList = ({meds}) => (
  <section className="medicine-list">
    <section className="medicnes">
      <h2>My medicines</h2>
      <ul>
        {console.log('HERE MEDICINES 💊->', meds)}
        {
          meds.map( (med, i) =>
            <li key={i}> {med.name} </li>
          )
        }
      </ul>
    </section>
  </section>
)

export default MedicneList
