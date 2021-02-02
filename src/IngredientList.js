import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render () {
    return (
      <div>
        {/* map of ingredient with button in unordered list? */}
        <Ingredient ingredients={this.props.ingredients} />
      </div>
    )
  }
};

export default IngredientList;