import React, { useState } from 'react'
import Ingredients from './Ingredients'

function IngredientList(props) {
    // console.log(props.ingredients, 'getting data from app, ingredients')

    let ingredientsList = props.ingredients.map((ingredient, i) => {
        return (
            <li onClick={props.addIng} key={`ing-key${i}`}><Ingredients ingredient={ingredient} /></li>
        )
    })

    return (
        <div className="ingredients">
            <h3>ingredients</h3>
            <ul className="ing-list">
                {ingredientsList}
            </ul>
        </div>
    )
}

export default IngredientList