import React, { Component } from 'react';
import Ingredient from './Ingredient';

function IngredientList(props) {
  let ingredientz = props.ingredients.map(elem => {
    return <li onClick={props.addIngredient}><Ingredient ingredient={elem} /></li>
  })

  //Iterate over the ingredients, and return an li with ingredient component, given the ingredient
  return (
    <div className='pane'>
      <h3>Ingredients</h3>
      <ul className='stuff-list'>
       {ingredientz}
      </ul>
    </div>
    
  )
}


export default IngredientList; 

