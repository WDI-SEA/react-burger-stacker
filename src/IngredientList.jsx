import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    state = {  } 
    render() { 
        let allIngredients = this.props.ingredients.map((ingredient, idx)=> {
            return (
                < Ingredients addToBurger={this.props.addToBurger} key={`Ingredient ID: ${idx}`} ingredient={ingredient.name} color={ingredient.color} /> 
            )
        })
        return (
            <div>
                <h2>Ingredient List</h2>
                <ul>
                    {allIngredients}
                </ul>
            </div>
        );
    }
}
 
export default IngredientList;