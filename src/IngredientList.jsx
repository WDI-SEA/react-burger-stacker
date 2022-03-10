import { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
  render() {
    return (
      <div className="ingredientList-wrapper">
        <h2>Ingredient list</h2>
        <Ingredient />
        <Ingredient /> 
        <Ingredient />
        <Ingredient />
      </div>
      )
  }
}

export default IngredientList