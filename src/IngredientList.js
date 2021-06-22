import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    // Map over an array of ingredients
    // Create an ingredient component for each item in the array
    
    render(){

        let ingredientComponents = this.props.ingredients.map(item => {
            return(
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>
        )})

        return(
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}