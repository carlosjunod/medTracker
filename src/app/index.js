import React, { Component } from 'react';
import './App.css';
import MedicneList from '../components/MedicineList/'
import Header from '../components/Header/'
import Admin from '../components/Admin/'

const prettyTime = (sec) =>{
  Math.floor(sec/60) + ':' + ('0' + sec % 60).slice(-2)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      medicines:[
        {
          name: "Ibuprofen",
          brand: "Advil",
          mg: 600
        },
        {
          name: "another",
          brand: "lalla",
          mg: 200
        }
      ]
    }
  } 
  render() {
    return (
      <div className="App">
        <Header medicines={this.state.medicines}/>
        <section className="medicine">
          <header>
            <h2>Medications</h2>
          </header>
          <MedicneList />
        </section>
        <Admin />
    </div>
    );
  }
}

export default App;
