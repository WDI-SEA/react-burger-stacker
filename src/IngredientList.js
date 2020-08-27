import React from 'react';
import Ingredients from './Ingredients';
import './App.css';


export default function IngredientList(props) {
    
    return (

        <div className="ingredient-list-div">
            <h1>This the Ingredient List</h1>
            {/* we'll need to use map to list all ingredients */}
            <ul>
                <Ingredients />
            </ul>
        </div>
    )
}