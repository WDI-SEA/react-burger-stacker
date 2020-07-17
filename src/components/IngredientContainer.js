import React from 'react';
import Ingredient from './Ingredient.js'

const IngredientContainer = (props) => {
    return (
        <div className="ingredient-container">
            <ul>
                {props.appData.map(ingredient => (
                    <Ingredient key={ingredient.name} ingredient={ingredient} pileHigh={props.pileHigh}/>
                ))}
            </ul>
        </div>
    );
}

export default IngredientContainer;