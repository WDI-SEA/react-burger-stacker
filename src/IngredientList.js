import React from 'react'
import Ingredients from './Ingredients';


function IngredientList (props)  {
    
    return (
        <div className="ingredientList">
            <h1>Ingredient List</h1>
            <ol>
                <Ingredients addToBurger={props.addToBurger} />
            </ol>
        </div>
    )
}

export default IngredientList