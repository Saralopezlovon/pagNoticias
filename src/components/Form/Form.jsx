import React, { Component } from "react";

class Form extends Component {
  render() {
    return (<div>
        <h1>Añade una noticia: </h1>
        <form>
          <label>Titular: </label>
              <input type="text" id="title" name="title"/> <br /><br />
          <label>Imagen: </label>
              <input type="url" id="picture" name="picture" /><br /><br />                        
          <label>Descripción: </label>
              <input type="text" id="description" name="description" /><br /><br />
          <label>Autor: </label>
              <input type="text" id="author" name="author" /><br /><br /> 
          <label>Fecha: </label>
              <input type="date" id="date" name="date" /><br /><br />                       
          <input type="submit" />

        </form> 
      </div>);
  }
}

export default Form;
