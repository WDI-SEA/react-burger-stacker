import React, { Component } from 'react';

const Ingredients = props => {
    return (
        <div>
            <h3 style={{ backgroundColor: props.ingredients.color }}>{props.ingredients.name}</h3>
            <button value={props.ingredients.name} onClick={props.buttonClick}>Add Ingredient</button>
        </div>
    )
}

export default Ingredients
