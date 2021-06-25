import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = (props) => {
    
    let burgerIngredients = props.clickedIngredients.map((item) => (
        <li>
             <Ingredient ingredient={item.name} color={item.color} />
        </li>
    ))

        return (
            <ul>    
                {burgerIngredients.reverse()}
            </ul>
        )
}

export default BurgerStack