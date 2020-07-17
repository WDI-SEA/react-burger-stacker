import React from 'react'
import Ingredient from './Ingredients'

function BurgerStack(props) {
    return (
        <div>
            <ul>
            {props.ingredients.map((ingredient) => {
                    console.log(ingredient)
                    return (
                        <li>
                            <Ingredient ingredient={ingredient} />
                        </li>
                        
                    )
                })}
            </ul>
         
        </div>
    )
}

export default BurgerStack