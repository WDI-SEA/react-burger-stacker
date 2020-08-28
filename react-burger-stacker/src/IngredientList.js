import React from 'react'
import Ingredients from './Ingredients'

function IngredientList(props) {
    return(
        <div class="ingredientlist">
            <h5>Ingredients: </h5>
            <Ingredients ingredients={props.ingredients} onClick={props.onClick} />
        </div>
    )
}
export default IngredientList
