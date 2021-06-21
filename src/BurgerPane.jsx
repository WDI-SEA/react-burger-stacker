import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = () => {
    return (
        <div>
            <BurgerStack />
            <ClearBurger />
            <h2>Burger</h2>
        </div>
    )
}

export default BurgerPane