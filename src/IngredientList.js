import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

    // map over an array of ingredients
    // create an ingredient component for each item in the array
    
    render() {
        let ingredientComponents = this.props.ingredients.map((item, index) => (
            <li onClick={this.props.addToBurger}>
                <Ingredient ingredient={item.name} color={item.color} key={ index } />
            </li>
        ))

        return (
            // render a list of those components     
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}