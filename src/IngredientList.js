import React, {Component} from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component{
  render(){
    const ingredientComponents  = this.props.ingredients.map((item, i)=>{
        return(
            <Ingredient 
                ingredient={item}
                handleIngredientClick={this.props.handleIngredientClick}
                key={`ingredient-list-${i}`}
            />
        )
    })
    return(
      <div>
        {ingredientComponents}
      </div>
    )
  }
}