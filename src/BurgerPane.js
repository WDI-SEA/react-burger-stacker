import React from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


export default function BurgerPane (props) {


    return(
        <div>
            <BurgerStack chosenIngredients = {props.chosenIngredients}/>
            <ClearBurger clearBurger = {props.clearBurger}/>
        </div>
    )

        
    
}

    


