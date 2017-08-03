import React, {Component} from 'react'

class MedicneList extends Component {
  render(){
    return(

      <section className="medicine-list">
        <section className="medicnes">
          <h2>My medicines</h2>
          <ul>

            <li className="med">
              <ul>
                <li>Medicine title</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>9:30 AM</li>
              </ul>
            </li>

          </ul>
        </section>
      </section>
        )
  }
}

export default MedicneList;
