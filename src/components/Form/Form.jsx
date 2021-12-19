import React, { Component } from "react";
import { Navigate } from 'react-router';
import "./Form.css"


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

    return (<div className="body-container">
        <h1 className="title">Añade una noticia: </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Titulo: </label>
              <input type="text" id="title" name="title" placeholder="Titulo de la noticia"/> <br /><br />
          <label>Imagen: </label>
              <input type="url" id="picture" name="picture" placeholder="Url de la imagen" /><br /><br />                        
          <label>Descripción: </label><br />
              <textarea rows="9" cols="40" id="description" name="description" placeholder="Descripción de la noticia" /><br /><br />
          <label>Autor: </label>
              <input type="text" id="author" name="author" placeholder="Autor de la noticia"/><br /><br /> 
          <label>Fecha: </label>
              <input type="date" id="date" name="date" /><br /><br />                       
          <input className="form-submit" type="submit" />

        </form> 
      </div>);
  }
}

export default Form;
