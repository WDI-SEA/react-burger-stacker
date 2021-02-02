import React, { Component } from 'react';
import Ingredient from './Ingredient';

class BurgerStack extends Component {
  render () {
    return (
      <div>
        {/* Ingredients to be represented as other divs? for burger rendering */}
        <Ingredient />
      </div>
    )
  }
};

export default BurgerStack;