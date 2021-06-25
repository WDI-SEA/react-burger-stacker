import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList (props) {
// Map over an array of ingredients
// Create an ingredient component for each item in the array

    let ingredientComponents = props.ingredients.map(item => {
        return(
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredient ingredient={item.name} color={item.color} />
        </li>
    )})

    return(
        <ul>
            {ingredientComponents}
        </ul>
    )
}