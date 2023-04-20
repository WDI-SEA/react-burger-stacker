import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render() {
    let ingredientComponents
    if (this.props.ingredients) {
    ingredientComponents = this.props.ingredients.map((ingredient, index) => (
      <Ingredient
        key={index}
        ingredient={ingredient}
        addIngredient={this.props.addIngredient}
      />
    ));}

    return (
      <div style={{ width: "500px" }}>
        <h2>Ingredients</h2>
        <ul>
            {ingredientComponents}
        </ul>
      </div>
    );
  }
}

export default IngredientList;
