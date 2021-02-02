import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPane extends Component{
    render(){
        return(
            <div id="burgerpane">
                <BurgerStack />
                <h1>Burger Pane</h1>
                <ClearBurger />
            </div>
        )
    }
}

export default BurgerPane;