import React, { Component } from 'react';
import './panier.css';
import Product from "./product"

class Prod_panier extends Component {

     render(){
        return (
            <div className="chartitem">
            <div><img className="artimgmin"  src={require("../imgs/"+this.props.info.id+".png")} alt=""/></div>
            <div className="prodname">{this.props.info.name}</div>
            <div className="qtt">{this.props.info.qtt}</div>
            <div><img className="delimg" name={this.props.info.id} src={require("../imgs/del.png")} onClick={this.props.delete} alt="" /></div>
            </div>
        )
    }
    }

export default Prod_panier