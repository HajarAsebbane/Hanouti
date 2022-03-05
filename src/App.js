import React, { Component } from 'react';
import './App.css';
import Aside from './Components/aside'
import Article from './Components/article'

import data from "./data"

class App extends Component {
  state={
    data:data,
    Total:0
  }

  rechercher=(e)=>{
    console.log("Hajar")
    let text=e.target.value
    let fdata=data.filter(elem=>elem.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    this.setState({data:fdata})
  }

  add_prod=(e)=>{ 
    let id=e.target.name
    console.log(id)
    data[id-1].qtt+=1
    console.log(this.state.data[id-1])
    this.state.Total+=data[id-1].price
    this.setState({data:data})
  }

  delete=(e)=>{ 
    let id=e.target.name
    console.log(id)
    this.state.Total-=data[id-1].price*data[id-1].qtt
    data[id-1].qtt=0
    this.setState({data:data})

  }

  render() {
    
   
    return (
      <section>
        <Article   data={this.state.data}    add_prod={this.add_prod}    />
        <Aside   data={this.state.data} total={this.state.Total} rechercher={this.rechercher} delete={this.delete}       />
      </section>
    );
  }
}

export default App;
