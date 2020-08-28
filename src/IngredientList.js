import React from 'react';
import Ingredients from './Ingredients';

function IngredientsList(props) {
    return(
        <div class="list">
            <Ingredients ingredients={props.ingredients} addIngredient={props.addIngredient} />
        </div>
    )
}

export default IngredientsList;