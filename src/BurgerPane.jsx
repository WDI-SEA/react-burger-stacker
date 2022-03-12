import React from 'react';
import ClearBurger from './ClearBurger';
import Ingredients from './Ingredients';

export default function BurgerPane({burgerIngredients, clearBurger}){

    const burgerIngredient = burgerIngredients.map((ingredient, idx)=>{
        return <Ingredients key={`burgerIng-${idx}`} ingredient={ingredient}/>
    })

    return(
        <section className='burger-pane'>
            <h1>Burger Pane</h1>
        
            {burgerIngredient}
        
            <ClearBurger clearBurger={clearBurger}/>
         </section>
    )

}