import React, { useState } from 'react';
import IngredientButton from './IngredientButton';

const IngredientList = (props) => {

    const newList = props.ingredients.map((i) => { 
        return ( 
            <IngredientButton name={i.name} onClick={props.onClick} color={i.color} />
        ) 
    })

    return (
        <div>
            <ul>
            <h1>Ingredients</h1>
                {newList} 
            </ul>
        </div>
    )

    
}

export default IngredientList;