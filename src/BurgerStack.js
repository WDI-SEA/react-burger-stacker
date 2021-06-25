import React from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack (props) {
    let burgerIngredients = props.burgerIngredients.map((item, index) => {
        return(    
            <li key={index}>
            <Ingredient ingredient={item.name} color={item.color} />
            </li>
        )    
    }).reverse()

    return(
        <ul style={{marginBottom: 'item'}}>
            {burgerIngredients}
        </ul>
    )
}
