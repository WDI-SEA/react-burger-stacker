import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients';

class BurgerStack extends Component {
    state = {  } 
    render() {
        let listBurgerIngredients = this.props.burgerIngredients.map((ingredient, idx)=> {
            return (
                < BurgerIngredients addToBurger={this.props.addToBurger} key={`Ingredient ID: ${idx}`} ingredient={ingredient} /> 
            )
        }) 
        return (
            <>
            <h3>Put some 'gredients here</h3>
            <ul>
                {listBurgerIngredients}
            </ul>
            </>
        )
    }
}
 
export default BurgerStack;