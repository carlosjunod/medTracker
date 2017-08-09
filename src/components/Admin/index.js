import React, {Component} from 'react'

class Admin extends Component {
  addMedicne(e) {
    e.preventDefault()
    this.props.addMed(this.name.value, this.brand.value, this.mg.value, this.alarm.value)
    this.props.closeModal()
  }

  editMedicine(e) {
    e.preventDefault()
    // console.log("DATOS:", this.name.value, this.brand.value, this.mg.value, this.alarm.value, this.props.edditing.i)
    this.props.editMed(this.name.value, this.brand.value, this.mg.value, this.alarm.value, this.props.edditing.i)
    this.props.closeModal()
  }

  render() {
    // checking if there are any information to edit in the state.ui.edditing
    if (this.props.edditing) {
      return (
        <section className="Edditing">
          <h1>Edditing</h1>

          <form onSubmit={(e) => this.editMedicine(e)}>
            <label htmlFor="name">Medcine Name</label>
            <input type="text" id="name" name="name" ref={(input) => this.name = input} defaultValue={this.props.edditing.name}/>
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" ref={(input) => this.brand = input} defaultValue={this.props.edditing.brand}/>
            <label htmlFor="mg">Mg</label>
            <input type="text" id="mg" name="mg" ref={(input) => this.mg = input} defaultValue={this.props.edditing.mg}/>
            <label htmlFor="alarm">alarm</label>
            <input type="text" id="alarm" name="alarm" ref={(input) => this.alarm = input} defaultValue={this.props.edditing.alarm}/>
            <button> save medicine </button>
          </form>
        </section>
      )
    }

    return (
      <section className="admin">
        <h1>Add Medicine</h1>

        <form onSubmit={(e) => this.addMedicne(e)}>
          <label htmlFor="name">Medcine Name</label>
          <input type="text" id="name" name="name" ref={(input) => this.name = input}/>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" ref={(input) => this.brand = input}/>
          <label htmlFor="mg">Mg</label>
          <input type="text" id="mg" name="mg" ref={(input) => this.mg = input}/>
          <label htmlFor="alarm">alarm</label>
          <input type="text" id="alarm" name="alarm" ref={(input) => this.alarm = input}/>
          <button> add medicine </button>
        </form>
      </section>
    )
  }
}

export default Admin

// import React from 'react'
//
// function addMedicne(e) {
//   e.preventDefault()
//   console.log('lalalallaallalalalala')
//   this.props.addMed()
// }
//
// const Admin = () => (
//   <section className="admin">
//     <h1>Admin</h1>
//
//     <form onSubmit="this.addMed">
//       <label htmlFor="name">Medcine Name</label>
//       <input type="text" id="name" name="name"/>
//       <label htmlFor="brand">Brand</label>
//       <input type="text" id="brand" name="brand"/>
//       <label htmlFor="mg">Mg</label>
//       <input type="text" id="mg" name="mg"/>
//
//
//     </form>
//     <button onClick={ addMedicne() } className="add_btn">Add Med</button>
//   </section>
// )
//
// export default Admin
