import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


const BurgerPane = () => {
    return(
        <div>
            <BurgerStack />
            Burger Stacking Area
            <ClearBurger />
        </div>
    ) 
}



export default BurgerPane