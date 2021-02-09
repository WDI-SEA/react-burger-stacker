import React from 'react';
import Ingredients from './Ingredients';

function BurgerStack(props) {
    let allIngredients = props.ingredients.map((ingredient, i) => {
        return (
            <Ingredients ingredients={ingredient} key={i} />
        )
    })

    return (
        <div className="stack">
            {allIngredients}
        </div>
    )
}


export default BurgerStack;