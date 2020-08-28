import React from 'react'
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
import './App.css';

function BurgerPane (props) {
    return (
        <div className="burgerPane">
        <BurgerStack burger={props.burger} />
        <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BurgerPane