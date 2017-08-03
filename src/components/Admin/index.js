import React, {Component} from 'react'

class Admin extends Component{
  render(){
    return(
        <section className="admin">
          <h1>Admin</h1>

          <form>
            <label htmlFor="name">Medcine Name</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand"/>
            <label htmlFor="mg">Mg</label>
            <input type="text" id="mg" name="mg"/>
          </form>
        </section>
    )
  }
}

export default Admin;
