import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className='cardContainer'>
          <h1>Titular</h1>      
          <img src="https://static.dw.com/image/47222941_401.png" alt="new"/>
          <p>Descripción</p> 
          <p>Autor</p>   
          <p>Fecha</p> 
          
          <button onClick={this.props.delete}>Borrar</button>

      </div>

      
  )
  }
}

export default Card;
