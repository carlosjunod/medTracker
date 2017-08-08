import React, {Component} from 'react'

class Admin extends Component {
  addMedicne(e) {
    e.preventDefault()
    this.props.addMed(this.name.value, this.brand.value, this.mg.value, this.alarm.value)
  }

  render() {
    return (
      <section className="admin">
        <h1>Admin</h1>

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
