import React, {useState} from 'react';

const IngredientButtons = (props) => {
    
    return (
        <button className='Buttons' value={props.ingredient.name} style={{backgroundColor: `${props.ingredient.color}`}} onClick={(e) => props.onClick(e)}>{props.ingredient.name}</button>
        
    )


}

export default IngredientButtons
