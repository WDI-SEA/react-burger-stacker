import React from 'react';

function Ingredient(props) {
        return (
            <p style={{ backgroundColor: props.ingredient.color }}>{props.ingredient.name}</p>
        )
    }

export default Ingredient;