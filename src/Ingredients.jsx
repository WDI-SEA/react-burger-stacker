import React from 'react';

export default function Ingredients({ingredient, addToBurger}){
    return (
        <div 
        className='ingredient' 
        onClick={()=>addToBurger(ingredient)}
        >
            
            <p>{ingredient.name}</p>

        </div>
    )
}