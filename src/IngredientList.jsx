import React from 'react';
import Ingredients from './Ingredients';

export default function IngredientList({ingredients, addToBurger}){

    const ingredientItems = ingredients.map((ingredient, idx)=>{
        return <Ingredients 
        key={`ing-${idx}`} 
        ingredient={ingredient}
        addToBurger={addToBurger}
        />
    })

    return(
        <section className='ingredient-list'>
                <h1>Ingredient List: </h1>
                {ingredientItems}
            </section>
           
    )
}