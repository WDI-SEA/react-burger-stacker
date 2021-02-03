import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
  constructor(props){
    super()
  }
  render () {
    let allIngredients = this.props.ingredients.map((item, index) => {
      return (
      <Ingredient item={item} key={index} updateIngredient={this.props.updateIngredient} />
      )
    }) 
    return (
      <div className="ingredientList">
        <h2> Ingredient List </h2>
        {/* map of ingredient with button in unordered list? */}
        <ul>
          {allIngredients}
        </ul>
      </div>
    )
  }
};

export default IngredientList;