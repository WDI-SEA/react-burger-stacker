// ingredient list will loop over props(ingredients) 
// produces an Ingredient component for every ingredient in the array 
import Ingredient from './Ingredient'
import React from 'react'

const IngredientList = props => {

    /** Here we need to store our group of ingredients(the components)
     * then in our return, we'll render those as necessary
     */

    let allIngredients = props.ingredients.map(mapIngredient => (
        <li onClick={props.add}>
            <Ingredient ingredient={mapIngredient} />
        </li>
    ))
    return (
        <section className="pane">
            <h3>Ingredient List</h3>
            <ul className="ingredient-list">
                {allIngredients}
            </ul>
        </section>

    )

}

export default IngredientList

