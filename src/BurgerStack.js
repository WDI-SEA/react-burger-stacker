import React from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack (props) {
    
        let burgerIngredients = props.clickedIngredients.map((item) => (
            <li>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>
        ))
        
        return (
            <ul>
                {burgerIngredients.reverse()}
                {/* {burgerIndients.reverse()} */}
                {/* taKe out the reverse from the map portion */}
            </ul>
        )
    
}


