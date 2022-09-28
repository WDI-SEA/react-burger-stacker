import React, { Component } from "react"
import Ingredients from "./Ingredients"

export default class IngredientList extends Component {
  render () {
    const ingredientComponents = this.props.ingredients.map((item, i) => {
        return (
            <Ingredients 
                ingredient={item}
                handleIngredientClick={this.props.handleIngredientClick}
                key={`ingredient-list-${i}`}
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
