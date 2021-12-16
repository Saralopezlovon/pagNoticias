import React, { Component } from "react";
import {userContext} from '../../context/userContext'

class Home extends Component {

  static contextType = userContext //Anida a la clase el nuevo contexto

  handleSubmit = (event) =>{
    event.preventDefault();
    const name = event.target.elements.nameUser.value
  
    const {login} = this.context //Consumir contexto

    login(name)
    
  }


  render() {
    return(<div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Nombre: </label>
            <input type="text" id="nameUser" name="nameUser" placeholder="Nombre usuario"/> <br /> <br />    
        <input type="submit" />

      </form> 
    </div>);
  }
}

export default Home;
