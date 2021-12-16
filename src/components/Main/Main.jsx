import React, { Component } from 'react'
import Home from '../Home'
import Form from '../Form'
import ListNews from '../ListNews'
import axios from 'axios'

import {Route, Routes} from 'react-router-dom'; //Para las rutas

class Main extends Component {

    //Añadir el primer estado al componente padre de noticias
    constructor(props) {
      super(props)
      this.state = {
        lastAdded:{title:"", picture: "", description:"", author:"", date:""},
        newList: []          
      }
    };

    //Añadir al estado lo que me traiga del fetch
    componentDidMount() {

      axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_KEY}`)
        .then(res => console.log(res))
    }
    //Declarar una función que modifique el estado del padre y se cambie por lo que recoja el hijo
    //Desde el hijo se pasa como parámetros lo recogido del formulario y se cambia el estado con un setState
    setInfo = (title, picture, description, author, date) =>{
      const newNew = {title, picture, description, author, date}
      this.setState({ lastAdded:{newNew} })
      this.setState({ newList: [...this.state.newList, newNew] })      
    }

    deleteNew = (i) => {
      //Me quedo con todos los elementos distintos al parametro que me estan dando.
      const news = this.state.newList.filter((item,j)=>j!==i)
      this.setState({newList:news})
    }


  render() {
    console.log(this.state.newList)
    return (
      <main>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/form" element={<Form setInfo={this.setInfo} />} />
              <Route path="/list" element={<ListNews data={this.state} delete={this.deleteNew}/>} />                  
            </Routes>
      </main>
    )
  }
}

export default Main;
