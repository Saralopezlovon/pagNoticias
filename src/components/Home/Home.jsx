import React, { Component } from "react";

class Home extends Component {
  render() {
    return(<div>
      <h1>Iniciar sesión</h1>
      <form>
        <label>Nombre: </label>
            <input type="text" id="nameUser" name="NameUser" placeholder="Nombre usuario"/> <br /> <br />    
        <input type="submit" />

      </form> 
    </div>);
  }
}

export default Home;
