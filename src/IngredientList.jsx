import "./App.css";
import { Component } from "react";
import Ingredient from "./Ingredient.jsx";

class IngredientList extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return (
        <Ingredient
          key={`ingredient-index-${index}`}
          ingredient={ingredient}
          addToBurger={this.props.addToBurger}
        />
      );
    });
    return (
      <section className="ingredient-list">
        <h1>Ingredients</h1>
        {ingredients}
      </section>
    );
  }
}

export default IngredientList;
