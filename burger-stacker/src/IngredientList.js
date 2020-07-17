import React, { useState } from 'react';
import Ingredient from './Ingredient'

const IngredientList = (props) => {

    return (
        <div className = "ingredientList">
            <Ingredient ingredients={props.ingredients} addIngredient={props.addIngredient} />
        </div>
    );
}


export default IngredientList;