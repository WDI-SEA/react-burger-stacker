  
import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './BurgerClear'

const BurgerPane = (props) => {
    // handle passed in props and state vals and functions
        return (
            <div>
                <BurgerStack burgerIngredients={props.burgerIngredients} />
                <ClearBurger clearBurger={props.clearBurger} />
            </div>
        )
}

export default BurgerPane