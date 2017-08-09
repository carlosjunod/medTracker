import React, { Component } from 'react'

class Item extends Component {
  deleteMedicine() {
    this.props.delMed(this.props.i)
  }

  editMedicine() {
    // this.props.editMed('new name', 'new brand', 'new mg', 'new alarm', this.props.i)
    this.props.editModal(this.props.med.name, this.props.med.brand, this.props.med.mg, this.props.med.alarm, this.props.i)
  }
  render() {
    return (
      <li className="item">
        <h3 className="medName">{this.props.med.name}</h3>
        <span className="medinfo">
          {this.props.med.brand}, {this.props.med.mg}mg
        </span>
        <span className="medalarm">
          {this.props.med.alarm}
        </span>
        <span className="button del">
          <button onClick={(e)=>this.deleteMedicine()}>del</button>
        </span>
        <span className="button edit">
          <button onClick={(e)=>this.editMedicine()}>edit</button>
        </span>
      </li>
    )
  }
}

export default Item
