import React, { Component } from 'react'
import Ingredient from './Ingredient.jsx'

export default class IngredientList extends Component {

   

    // map over an array of ingredients
    // create an ingredient component for each item in the array

    render() {
        let ingredientComponents = this.props.ingredient.map(item => (
            <div>
            <li onCLick={(e) => this.props.addToBurger(e)}/>
               <Ingredient ingredient={ingredient.name} color={ingredient.color} />
            <button onclick={(e) => this.props.addIngredients} value={ingredient.name} />
            
            </div>
        ))
        return (
            // render a list of those components
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}