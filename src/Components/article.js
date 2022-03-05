import React, { Component } from 'react';
import './Article.css';
import data from "../data"
import Product from "./product"

class Article extends Component{

   state={
       data:data
   }

     render(){
         let products=this.props.data.map(elem=><Product info={elem}  key={elem.id} add_prod={this.props.add_prod} />)

        return(
            <article>
                {products}
            </article>
        )
     }


} 


export default Article;