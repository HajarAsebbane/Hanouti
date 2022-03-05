import React, { Component } from 'react';
import './product.css';

class Product extends Component{


     render(){
        return(
            <div className="article">
                <img className="artimg" src={require("../imgs/"+this.props.info.id+".png")} alt="" />
                <div>
                    {this.props.info.name+""+this.props.info.price}
                </div>
                <img className="plusimg" name={this.props.info.id} onClick={this.props.add_prod} src={require("../imgs/plus.png")} alt="" />
            </div>
        )
     }


} 


export default Product;