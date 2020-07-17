import React from 'react';
import BurgerIngredients from './BurgerIngredients'

function BurgerStack(props) {
    return (
        <div>
            <BurgerIngredients addedIngredients={props.addedIngredients} />
        </div>
    )
}


export default BurgerStack