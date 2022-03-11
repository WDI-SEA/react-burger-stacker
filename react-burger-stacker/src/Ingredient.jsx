import React, { Component } from 'react';

export default class Ingredient extends Component {
    render() {
        return (
            <div 
            className="ingredient" 
            onClick={()=>{
                this.props.addToBurger(this.props.ingredient)
                }}>   
                <p>{this.props.ingredient.name}</p>                
            </div>
        )
    }
}