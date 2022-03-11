import { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {

  

  render() {
    const showIngredients = this.props.ingredienstList.map((ingredient, index) => {
      return (
        <Ingredient ingredient={ingredient.name} color={ingredient.color} key={`Ingredient-${index}`} addIngredientsHandler={this.props.addIngredientsHandler}/>
      )
    })
    return (
      <div className="ingredientList-wrapper">
        <h2>Ingredient list</h2>
        {showIngredients}
      </div>
      )
  }
}

export default IngredientList