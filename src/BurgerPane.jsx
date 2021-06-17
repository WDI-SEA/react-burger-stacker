import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = () => {
    return (
        <div>
            <h2>Hello from BurgerPane!</h2>
            <BurgerStack />
            <ClearBurger />
        </div>
    )
}

export default BurgerPane