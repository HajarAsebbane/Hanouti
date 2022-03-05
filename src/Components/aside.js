import React, { Component } from 'react';
import './Aside.css';
import Product from "./product"
import Prod_panier from "./prod_panier"

class Aside extends Component{

   state={
       data:this.props.data   
   }

     render(){
        let filter_array=this.state.data
        filter_array=filter_array.filter(e=>(e.qtt>0))
        console.log("Hajar")
        console.log(filter_array)
        let prods_panier=filter_array.map(elem=> <Prod_panier info={elem} key={elem.id} delete={this.props.delete} />)
        return(
        <aside>
            <div id="search">  
            <input type="text" onChange={this.props.rechercher} placeholder="search a produit ..." /></div>
            <div id="total" className="title">Total:{this.props.total} </div>
           <div className="panier" id="panier">
            {prods_panier}
            </div>
        </aside>)


}
}
export default Aside;