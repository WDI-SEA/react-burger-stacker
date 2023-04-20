import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render() {
    const { ingredients, onAddIngredient } = this.props;

    return (
      <div className="ingredient-list">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onAddIngredient={onAddIngredient}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default IngredientList;
