import React from 'react'
import Ingredient from './Ingredient'


const IngredientList = (props) => {

    let ingredientComponents = props.ingredients.map(item => (
        <li onClick={(e) => props.addToBurger(e)}>
            <Ingredient ingredient={item.name} color={item.color}/>
        </li>
    ))

    return (
        <ul>
            {ingredientComponents}
        </ul>
        )
}

export default IngredientList