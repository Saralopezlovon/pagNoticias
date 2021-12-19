import React, { Component } from "react";
import Card from "./Card/Card"
import "./ListNews.css"

class ListNews extends Component {

  paintNews = () =>{   
    return this.props.data.newList.map((item,i)=> <Card infoNew={item} delete={()=>this.props.delete(i)} key={i}/>)
  }

  render() {
    return (<div className="news-container">
        {this.paintNews()}
      </div>)      
  }
}

export default ListNews;
