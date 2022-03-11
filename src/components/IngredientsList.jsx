import React, { Component } from 'react';
import Ingredient from './Ingredient';
import NewIngredientForm from './NewIngredient';

class IngredientsList extends Component {

  render() { 
    let ingredientsComponents = this.props.ingredients.map((ingredient, idx) => {
      return (
        <Ingredient 
          key={idx}
          ingredient={ingredient}
          addToStack={this.props.addToStack}
        />
      )
    })  
  return ( 
    <div className='container'>
      {ingredientsComponents}
    </div>
    );
  }
}
 
export default IngredientsList;