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
                <label>Name:
                    <input type="text" id="name" name="name" />
                </label>
                <label>Color:
                    <input type="color" id="color" name="color" />
                </label>
                <input type="submit" value="I must have this" />
            </form>
        </div>
    );
}

export default IngredientContainer;