import React, { Component} from "react";
import Ingredient from "./Ingredient";



export default class IngredientList extends Component{

  render(){
    const ingredientComponents = this.props.ingredients.map((ingredient, i)=>{
      return (
        <Ingredient
          key = {`ingredient${i}`}
          ingredient = {ingredient}
          handleIngredientClick = {this.props.handleIngredientClick} 
          />
          // pass in click event handler
      )
    })
    return(
      <div> 
          {ingredientComponents}
      </div>
    )
  }
}
