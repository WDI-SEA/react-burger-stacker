import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  render () {
    //Iterate over the ingredients, and return an li with ingredient component, given the ingredient
      let ingredients = this.props.ingredients.map(elem => {
        return <li><Ingredient ingredient={elem} /></li>
      })
    return (
      <div className='pane'>
        <h3>Ingredients</h3>
        <ul className='stuff-list'>
         {ingredients}
        </ul>
      </div>
      
    )
  }
};

export default IngredientList; 

