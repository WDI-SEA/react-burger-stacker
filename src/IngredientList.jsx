import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <Ingredient
        key={index}
        ingredient={ingredient}
      />
    ));

    return (
      <div style={{ width: "500px" }}>
        <h2>Ingredients</h2>
        <ul>
            {ingredients}
        </ul>
      </div>
    );
  }
}

export default IngredientList;
