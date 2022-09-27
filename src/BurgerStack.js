import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class BurgerStack extends Component {
    render() {
        const ingredientComponents = this.props.clickedIngredients.map((item, i) => {
            return (
                <Ingredients 
                    ingredient={item}
                    key={`burgerlist-ingredients${i}`}
                />
            )
        })
        return (
            <div>
                {ingredientComponents}
            </div>
        )
    }
}

//ternary statements = if/else
// condition ? what to return if true : what to return if false
// if (condition) {
        //what to return if true
    // } else {
        // what to return if false
    // }

