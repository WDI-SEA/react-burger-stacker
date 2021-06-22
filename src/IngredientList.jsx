import React, { Component } from 'react'
import Ingredient from './Ingredient.jsx'
export default class IngredientList extends Component{
    // map over an array of ingredients
    // create an ingredient component for each item in the array
    render() {
      let ingredientComponents = this.props.ingredients.map((item, index) => (
          <li onClick={(e) => this.props.addToBurger(e)}>
          <Ingredient addToBurger={this.props.addToBurger} ingredient={item.name} color={item.color} key={`key${index}`} />
         </li>
        ))
        return(
            // render a list of those components
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}