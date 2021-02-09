import React from 'react';
import Ingredient from './Ingredients';


function IngredientList(props) {
    let allIngredients = props.ingredients.map((ingredient, i) => {
        return (
            <li key={`ingredient-${i}`}onClick={props.addItem}><Ingredient ingredient={ingredient} /></li>
        )
    })
    return (
        <div>
            <ul>
                {allIngredients}
            </ul>
        </div>
    )
}

export default IngredientList;