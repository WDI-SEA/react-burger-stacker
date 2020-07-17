import React from 'react';
import Ingredient from './Ingredient.js'

const IngredientContainer = (props) => {
    return (
        <div className="ingredient-container">
            <ul>
                {props.appData.map(ingredient => (
                    <Ingredient 
                        key={ingredient.name} 
                        ingredient={ingredient} 
                        pileHigh={props.pileHigh}/>
                ))}
            </ul>
            <form onSubmit={props.addToPantry}>
                <p>Add New Ingredient</p>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label for="color">Color:</label>
                <input type="color" id="color" name="color" />
                <input type="submit" value="I must have this" />
            </form>
        </div>
    );
}

export default IngredientContainer;