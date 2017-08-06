import React, {Component} from 'react'

const MedicneList = ({addMed}) => (
  <section className="medicine-list">
    <section className="medicnes">
      <h2>My medicines</h2>
      <ul>
        <button onClick={ addMed } className="add_btn">Add Med</button>
        {/* <li className="med">
          <ul>
            <li>Medicine title</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>9:30 AM</li>
          </ul>
        </li> */}

      </ul>
    </section>
  </section>
)

export default MedicneList
