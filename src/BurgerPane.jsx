import React, { Component } from 'react';
import ClearBurger from './ClearBurger';
import Ingredients from './Ingredients';


class BurgerPane extends Component {
    state={
        burgerArray: this.props.burgerIngredients
    }
    clearBurger = () =>{
        console.log('clear burger')
        this.setState({
            burgerArray: []
        })
    }

    render() { 
        const burgerIngredientItems = this.props.burgerIngredients.map((ingredient, idx)=>{
            return <Ingredients key={`burgerIng-${idx}`} ingredient={ingredient}/>
        })
        return (
            <>
            <h1>Burger Pane</h1>
            <ul>    
                {burgerIngredientItems}
            </ul>
          
            <ClearBurger burgerIngredientItemsProp={burgerIngredientItems} clearBurger={this.clearBurger}/>
            </>
        );
    }
}
 
export default BurgerPane;