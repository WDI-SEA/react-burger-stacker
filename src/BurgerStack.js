import React from 'react';
import Ingredient from './Ingredient';

// Same function as ingredients list but single line function
function BurgerStack(props) {
  return (
    <div>
      <ul>
        {props.ingredients.map(ingredient => <li><Ingredient ingredient={ingredient} /></li>)}
      </ul>
    </div>
  )
}

export default BurgerStack;