import React, { Component } from "react";
import { Navigate } from 'react-router'


class Form extends Component {

  state = {
    redirect: false
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const title = event.target.elements.title.value
    const picture = event.target.elements.picture.value
    const description = event.target.elements.description.value
    const author = event.target.elements.author.value
    const date = event.target.elements.date.value 

    this.props.setInfo(title, picture, description, author, date)

    this.setState({ redirect: true });
 
}

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Navigate to='/list'/>;
     }

    return (<div>
        <h1>Añade una noticia: </h1>
        <form onSubmit={this.handleSubmit}>
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
