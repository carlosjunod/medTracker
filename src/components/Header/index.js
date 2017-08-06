import React, { Component } from 'react';

class Header extends Component {
  render() {
    // console.log('props: ', this.props.medicines.length);

    return (
      <header className="app-header">

        <h1> MedTracker </h1>
        <p>Today you have medicines to take</p>
      </header>
    );
  }
}

export default Header;
