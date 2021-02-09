import React, { useState } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div className="burgerSection">
            <BurgerStack addedIngredients={props.addedIngredients}/>
            <ClearBurger clearOrder={props.clearOrder}/>
        </div>
    )
}

export default BurgerPane