import React, { useState } from 'react';

function Ingredient(props) {
    let list = props.ingredients.map((ingredient) => {
        return (<li>
            {ingredient.name}
            <button value={ingredient.name} onClick={(e) => props.addIngredient(e)}>></button>
        </li>);
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default Ingredient;