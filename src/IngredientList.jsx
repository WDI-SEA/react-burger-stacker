import React from 'react';
import ingredientsData from './ingredientsData';

function IngredientList(props) {

    return (
        <div className="ingredientList">
            <h1>Ingredients:</h1>
            {props.ingredientsData.map( (ingredient, index) => (
                <div key={index}>
                    <button onClick={ (e) => {props.addIngredient(e)} } value={index}>{ingredient.name}</button>
                </div>
            ))}
        </div>
    )
}


export default IngredientList