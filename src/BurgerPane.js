import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
import './App.css';

export default function BurgerPane(props) {
    return (
        <div className="burger-pane-div">
            <h1>This the Burger Pane</h1>
            <BurgerStack burger={props.burger} />
            <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}