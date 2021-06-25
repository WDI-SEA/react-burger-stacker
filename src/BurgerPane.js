import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    return (
        <div>
        <BurgerStack burgerIngredients={props.burgerIngredients} />
        <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BurgerPane