import React from 'react'
import Ingredients from './Ingredients';


const IngredientList = (props) => {
    
    return (
        <div className="ingredientList">
            <h1>Ingredient List</h1>
            <ol>
                <Ingredients />
            </ol>
        </div>
    )
}

export default IngredientList