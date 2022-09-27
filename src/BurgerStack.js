import React, {Component} from "react";
import Ingredient from "./Ingredient";

export default class BurgerStack extends Component{
  render(){
    const ingredientComponents = this.props.clickedIngredients.map((item, i)=>{
        return (
            <Ingredient 
                ingredient={item}
                key={`burger-ingredient${i}`}
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