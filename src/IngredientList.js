import React from 'react';
import Ingredients from './Ingredients'

function IngredientList(props) {

    return(
        <div class="list">
            <Ingredients ingredients={props.ingredients} addIngredient={props.addIngredient}/>
        </div>
    )
}

export default IngredientList