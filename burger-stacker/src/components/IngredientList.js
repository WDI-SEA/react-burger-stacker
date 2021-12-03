import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = props => {
    // create clickable elements for all ingredients in the state
    let allIngredients = props.ingredients.map(ingredient => (
        <li>
            <Ingredient ingredient={ingredient} clicky={props.add} />
        </li>
    ))
    // render ingredients
    return (
        <section className='pane'>
            <h3>Ingredient List</h3>
            <ul className="ingredient-list">
                { allIngredients }
            </ul>
        </section>
    )
}

export default IngredientList