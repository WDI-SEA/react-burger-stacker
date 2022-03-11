import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

class BurgerPane extends Component {
    state = {  } 
    render() {
        return (
            <>
            <h3>Burger Pane</h3>
            <BurgerStack burgerIngredients={this.props.burgerIngredients}/>
            <ClearBurger clearBurger={this.props.clearBurger}/>
            </>
        );
    }
}
 
export default BurgerPane;