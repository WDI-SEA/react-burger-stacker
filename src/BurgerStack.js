import React from 'react'
import Ingredient from './Ingredients'

function BurgerStack(props) {
    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                        <li><Ingredient ingredient={ingredient.name} /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BurgerStack