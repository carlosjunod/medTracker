import React, { Component } from 'react'
import './Header.css'


class Header extends Component {
  render() {
    // console.log('props: ', this.props.medicines.length);

    return (
      <header className="app-header">
        <h1> Med<span>Tracker</span> </h1>
        <p>Today you have <span className="to-take">{this.props.meds.length}</span> medicines to take today</p>
      </header>
    )
  }
}

export default Header
