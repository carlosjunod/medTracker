import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>MedTracker</h1>
        </header>
        <section className="medicine">
          <header>
            <h2>Medications</h2>
          </header>
        </section>
        <section className="admin">
          <header>admin</header>
        </section>
      </div>
    );
  }
}

export default App;
