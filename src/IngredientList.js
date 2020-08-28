import React from 'react';
import Ingredients from './Ingredients'

function IngredientList(props) {

    return(
        <div class="list">
            <label for="ingredients">Search Ingredients: </label>
            <input type="text" name="ingredients" />
            <button>Add On!</button>
            <Ingredients ingredients={props.ingredients} addIngredient={props.addIngredient}/>
        </div>
    )
}

export default IngredientList