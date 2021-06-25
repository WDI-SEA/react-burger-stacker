import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = (props) => {
    let burgerIngredients = props.burgerIngredients.map((item, index) => (
        <li key={index}>
            <Ingredient ingredient={item.name} color={item.color} />
        </li>
    )).reverse()
    return (
        <ul>
            {burgerIngredients}
        </ul>
    )
}

export default BurgerStack