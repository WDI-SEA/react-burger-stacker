import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default function BurgerPane(props) {
    return (
        <div className="burgerPane">
            <BurgerStack ingredients={props.ingredients} />
            <span>Burger Stacking Area</span>
            <br/>
            <ClearBurger action={props.action} />
        </div>
    )
}