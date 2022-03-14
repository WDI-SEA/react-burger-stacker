import "./App.css";
import Ingredient from "./Ingredient.jsx";

export default function IngredientList(props) {
  const ingredients = props.ingredients.map((ingredient, index) => {
    return (
      <Ingredient
        key={`ingredient-index-${index}`}
        ingredient={ingredient}
        addToBurger={props.addToBurger}
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
