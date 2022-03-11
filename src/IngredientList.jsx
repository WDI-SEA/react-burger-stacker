import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() { 
        
        const ingredientListItem = this.props.ingredients.map((ingredient, idx) =>{
                return <li><Ingredients key={`ing-${idx}`} ingredient={ingredient.name} addIngredient={this.props.addIngredient}/></li>
        })  

        return (

            <ul> Ingredient List:
            {ingredientListItem}
            </ul>
           
            
        );
    }
}
 
export default IngredientList