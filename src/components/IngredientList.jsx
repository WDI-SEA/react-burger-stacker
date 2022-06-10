import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class IngredientList extends Component {
  render() {
      const ingredientComponents = this.props.list.map((ingredient, i) => {
            return (
                <Ingredients 
                    name={ingredient.name}
                    color={ingredient.color}
                    key={i}
                    onIngredientClick={this.props.onIngredientClick}
                />
            )
      })
    return (
      <div >
          <h2>Ingredient List</h2>
            {ingredientComponents}
      </div>
    )
  }
}
