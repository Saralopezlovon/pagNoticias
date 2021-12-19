import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
  render() {

    const {title,picture,description,author,date} = this.props.infoNew

    return (
      <div className="cardContainer">
          <h1 className="title-card">{title}</h1>      
          <img className="img-card"src={picture} alt={title}/>
          <p className="description-card">{description}</p> 
          <p className="author-card">{author}</p>   
          <p className="date-card">{date}</p> 
          
          <button className="btn-delete" onClick={this.props.delete}>Borrar</button>

      </div>

      
  )
  }
}

export default Card;
