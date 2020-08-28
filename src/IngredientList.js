import React from 'react';
import Ingredient from "./Ingredient"


export default function IngredientList (props) {
    return(
        <div class="list">
            <Ingredient ingredients={props.ingredients} addIngredient={props.addIngredient} />
        </div>
    )
}

    


