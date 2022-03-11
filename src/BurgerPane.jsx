import React, { Component } from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger';
import Ingredients from './Ingredients';


class BurgerPane extends Component {
    render() { 
        const burgerIngredientItems = this.props.burgerIngredients.map((ingredient, idx)=>{
            return <Ingredients key={`burgerIng-${idx}`} ingredient={ingredient}/>
        })
        return (
            <>
            <h1>Burger Pane</h1>
            <li>{burgerIngredientItems}</li>
          
            <ClearBurger />
            </>
        );
    }
}
 
export default BurgerPane;