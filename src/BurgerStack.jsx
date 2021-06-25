
import React from 'react'
import Ingredient from './Ingredient'


const BurgerStack = (props) => {
          // call .map on our passed props array
        let burgerIngredients = props.burgerIngredients.map((item, index) => (
            <li>
                <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
            </li>
        ))

        return (
            <ul>
                {burgerIngredients.reverse()}
            </ul>
        )
}

export default BurgerStack