import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Nav.css"
import {userContext} from '../../context/userContext'

class Nav extends Component {
  render() {
    return <nav>
    <userContext.Consumer>
      {
          value => value.user ? <div className="greeting">
              <h3>Bienvenido {value.user} </h3>
              <button className="btn-logout" onClick={value.logout}>Logout</button>
          </div> : ""
      }
    </userContext.Consumer>   

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/form">Añade una noticia</Link></li>
      <li><Link to="/list">Lista de noticias</Link></li>     
    </ul>
    </nav>;
  }
}
export default Nav;
