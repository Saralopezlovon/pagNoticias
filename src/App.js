import './App.css';
import React, { Component } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import {userContext} from './context/userContext'; //Para utilizar context

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:"",
       login: this.login,
       logout:this.logout
    }
  }

  login = user => this.setState({user}) //Cambia el estado con un nuevo nombre
  logout = () => this.setState({user:""}) //Limpia el estado user

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={this.state}>
            <Header/>
            <Main/>
          </userContext.Provider>      

        </BrowserRouter>
        <Footer/>
  
  </div>
    )
  }
}




