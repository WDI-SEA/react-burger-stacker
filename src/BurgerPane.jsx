import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
        return (
            <div>
                <BurgerStack clickedIngredients={props.clickedIngredients} />
                <ClearBurger clearBurger={props.clearBurger} />
            </div>
        )
}

export default BurgerPane