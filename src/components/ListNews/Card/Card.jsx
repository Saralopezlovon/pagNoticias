import React, { Component } from "react";

class Card extends Component {
  render() {

    const {title,picture,description,author,date} = this.props.infoNew

    return (
      <div className='cardContainer'>
          <h1>{title}</h1>      
          <img src={picture} alt={title}/>
          <p>{description}</p> 
          <p>{author}</p>   
          <p>{date}</p> 
          
          <button onClick={this.props.delete}>Borrar</button>

      </div>

      
  )
  }
}

export default Card;
