import React,  { Component } from "react"
import Ingredients from './Ingredients'
import './App.css';

export default class IngredientList extends Component {

    render(){
        let allIngredients = this.props.ingredients.map((ingredient, i) =>{
            return (
            <div style={{backgroundColor: ingredient.color}}>
                <li key={i} >{ingredient.name}</li>
                <button 
                id="ingredientButton" 
                onClick={this.props.onClick}
                name={ingredient.name}
                > Add </button>
            </div>
            )
        })
        return (
            <div className="ingredientList">
                <h3>Build Your Burger:</h3>
            <ul>{allIngredients}</ul>
            </div>
        )
    }
    
}