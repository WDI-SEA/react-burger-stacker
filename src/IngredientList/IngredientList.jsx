import React from 'react';
import Ingredient from './Ingredient'

const IngredientList = (props) => {

    const showIngredients = props.ingredientDetail.map((ingredient, index) => { 
        return <Ingredient ingredient={ ingredient } addIngredient={props.addIngredient} index={index} />
    })

    return (
        <div>
            <h2>Available Ingredients:</h2>
            { showIngredients }
        </div>
    )
}

export default IngredientList;