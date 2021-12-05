import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = props => {

    let allIngredients = props.ingredients.map((ingredient, index) => (
        <li key={index} onClick={props.add}>
            <Ingredient ingredient={ingredient} />
        </li>
        ))

    return (
        <section className="pane">
            <h3>Ingredient List</h3>
            <ul className="ingredient-list">
                { allIngredients }
            </ul>
        </section>
    )
}

export default IngredientList