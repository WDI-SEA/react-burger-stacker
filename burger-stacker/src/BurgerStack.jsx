import React from 'react'
import Ingredients from './Ingredients'

const BurgerStack = (props) => {
        let selectedIngredients = props.burgerIngredients.map((item) => (
            <li>
                <Ingredients ingredients={item.name} color={item.color}/>
            </li>
        ))
        return (
            <ul>
                {selectedIngredients.reverse()}
            </ul>
        )
}
export default BurgerStack;