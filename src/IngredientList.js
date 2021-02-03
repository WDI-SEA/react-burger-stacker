import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render () {
    return (
      <div>
        <h2> Ingredient List </h2>
        {/* map of ingredient with button in unordered list? */}
        <Ingredient  />
      </div>
    )
  }
};

export default IngredientList;