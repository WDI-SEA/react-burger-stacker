import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
// map over an array of ingredients
// create an ingredient component for each item in the array
    let ingredientComponents = props.ingredients.map(item => (
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredient ingredient={item.name} color={item.color} />
        </li>
    ))
    return (
        <ul>
            {ingredientComponents}
        </ul>
    )
}
export default IngredientList
