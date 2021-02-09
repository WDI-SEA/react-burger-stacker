import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';


function BurgerPane(props){
        return (
            <div id="burgerpane">
                <h1>Burger Pane</h1>
                <BurgerStack burgerStuff={props.burgerIngredients} />
                <ClearBurger clearBurger={props.clearBurger} />
            </div>
        )
    }

export default BurgerPane;